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

function Searchbar({selectedStay, setSelectedStay, searchOption, setSearchOption}) {
    const [location, setLocation] = useState('Select Location');
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        setLocation(selectedStay ? `${selectedStay.city}, ${selectedStay.country}` : 'Select Location');
    }, [selectedStay])

    const toggleDrawer = (option, open) => (event) => {
        setSearchOption(option);
        setOpenDrawer(open);
    }

    return (
        <div>
            <ButtonGroup color="error">
                <Button 
                    style={{ textTransform: "capitalize"}}
                    onClick={toggleDrawer('location', true)}
                >
                    {location}
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
                onClose={() => setOpenDrawer(false)}
            >
                <div className='drawer-container'>
                    <Accordion sx={{width: '100%'}}>
                        <AccordionSummary 
                            aria-controls="location-content"
                            id="location-header"
                        >
                            <div className='accordion-header'>
                                <span>Location</span>
                                <span>{location}</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            ...
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{width: '100%'}}>
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
                            ...
                        </AccordionDetails>
                    </Accordion>
                    <Button 
                        endIcon={<SearchIcon />} 
                        color="error" 
                        variant="contained" 
                        disableElevation
                        sx={{width: '100%', height: 'fit-content'}}
                    >
                        Search
                    </Button>
                    
                </div>
            </Drawer>
        </div>
    )
}

export default Searchbar;