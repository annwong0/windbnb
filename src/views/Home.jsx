import Navbar from "../components/Navbar";
import StayCard from "../components/StayCard";

import stays from '../data/stays.json';

function Home() {
    return (
        <div>
            <Navbar />
            {stays.map((stay, i) => <StayCard stay={stay} key={i}/>)}
        </div>
    )
}

export default Home;