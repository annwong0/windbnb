import Navbar from "../components/Navbar";
import StayCard from "../components/StayCard";
import stays from '../data/stays.json';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../css/Home.css';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                {stays.map((stay, i) => <Grid item xs={12} md={6}>
            <StayCard stay={stay} key={i}/>
            </Grid>
            )}
                </Grid>
            </Box>
            
        </div>
    )
}

export default Home;