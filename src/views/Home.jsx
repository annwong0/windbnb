import StayCard from "../components/StayCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../css/Home.css';
import { useState } from "react";
import Searchbar from "../components/Searchbar";

function Home({selectedStays, handleSelectStays}) {
    const [location, setLocation] = useState('Finland');

    return (
        <div className="home content">
            {selectedStays && (
                <Box sx={{ flexGrow: 1 }} >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginBottom: "32px"}}
                >
                    <div className="home-searchbar">
                        <Searchbar handleSelectStays={handleSelectStays}/>
                    </div>
                    <div className="header">Stays in {location}</div>
                    <div>{selectedStays.length} stays</div>
                </Grid>
                <Grid container spacing={3} >
                    {selectedStays.map((stay, i) => 
                        <Grid item xs={12} sm={6} key={i}>
                            <StayCard stay={stay}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
            )}
        </div>
    )
}

export default Home;