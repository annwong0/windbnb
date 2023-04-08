import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import '../css/Searchbar.css';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import stays from '../data/stays.json';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Searchbar({selectedStays, handleSelectStays}) {
    const [location, setLocation] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [searchOption, setSearchOption] = useState(null);
    const [locationList, setLocationList] = useState([]);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const toggleDrawer = (option, open) => (event) => {
        setSearchOption(option);
        setOpenDrawer(open);
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    }

    const clearSearch = () => {
        setLocation(null);
        setAdults(0);
        setChildren(0);
    }

    useEffect(() => {
        computeStayList();
    }, [])

    const computeStayList = () => {
        let stayList = [];
        for (var i = 0; i < stays.length; i++) {
            stayList.push(`${stays[i].city}, ${stays[i].country}`);
        }
        stayList = [...new Set(stayList)];
        setLocationList(stayList);
    };

    const handleSearch = () => {
        setOpenDrawer(false);
        let city = '';
        let country = '';
        let totalGuests = children + adults;
        var tmp = [...stays];
        if (totalGuests > 0) {
            tmp = tmp.filter((stay) => totalGuests <= stay.maxGuests)
        }
        if (location !== null) {
            city = location.split(',')[0];
            country = location.split(',')[1];
            tmp = tmp.filter((stay) => stay.city === city)
        }
        handleSelectStays(tmp);
    }

    return (
        <div>
            <ButtonGroup color="error" variant="contained" disableElevation>
                <Button 
                    style={{ textTransform: "capitalize"}}
                    onClick={toggleDrawer('location', true)}
                >
                    {location ? location : 'Select Location'}
                </Button>
                <Button 
                    style={{ textTransform: "capitalize"}}
                    onClick={toggleDrawer('addGuests', true)}
                >
                    Add Guests
                </Button>
                <Button 
                    endIcon={<SearchIcon />} 
                    style={{ paddingLeft: "5px"}}
                    onClick={toggleDrawer('search', true)} 
                />
            </ButtonGroup>
            <Drawer 
                anchor='top' 
                open={openDrawer} 
                onClose={handleCloseDrawer}
            >
                <Grid container spacing={1} sx={{padding: '50px 5%'}}>
                    <Grid item xs={12} md={4}>
                        <Accordion sx={{width: '100%'}} defaultExpanded={searchOption === 'location'}>
                            <AccordionSummary 
                                aria-controls="location-content"
                                id="location-header"
                            >
                                <div className='accordion-header'>
                                    <span>Location</span>
                                    <span>{location ? location : 'Select Location'}</span>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {locationList && (
                                        locationList.map((location, i) => 
                                        <ListItem key={i} disablePadding>
                                            <ListItemButton onClick={() => setLocation(location)}>
                                                <ListItemIcon><LocationOnIcon color="error" /></ListItemIcon>
                                                <ListItemText>{location}</ListItemText>
                                            </ListItemButton>
                                        </ListItem>)
                                    )}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion sx={{width: '100%'}} defaultExpanded={searchOption === 'addGuests'}>
                            <AccordionSummary 
                                aria-controls="guest-content"
                                id="guest-header"
                            >
                                <div className='accordion-header'>
                                    <span>Guests</span>
                                    <span>Add Guests</span>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem disablePadding sx={{paddingBottom: '20px'}}>
                                        <div className='accordion-header' style={{gap: '5px'}}>
                                            <span>Adults</span>
                                            <span>Ages 13 or above</span>
                                            <div className='flex-row'>
                                                <IconButton size="small" color="error" onClick={() => setAdults(Math.max(0, adults - 1))}><RemoveIcon /></IconButton>
                                                <span>{adults}</span>
                                                <IconButton size="small" color="error" onClick={() => setAdults(adults + 1)}><AddIcon /></IconButton>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <div className='accordion-header' style={{gap: '5px'}}>
                                            <span>Children</span>
                                            <span>Ages 2-12</span>
                                            <div className='flex-row'>
                                                <IconButton size="small" color="error" onClick={() => setChildren(Math.max(0, children - 1))}><RemoveIcon /></IconButton>
                                                <span>{children}</span>
                                                <IconButton size="small" color="error" onClick={() => setChildren(children + 1)}><AddIcon /></IconButton>
                                            </div>
                                        </div>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='btn-container'>
                            <Button 
                                endIcon={<SearchIcon />} 
                                color="error" 
                                variant="contained" 
                                disableElevation
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                            <Button
                                color="error"
                                variant="contained" 
                                disableElevation
                                onClick={clearSearch}
                            >
                                Clear
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Drawer>
        </div>
    )
}

export default Searchbar;