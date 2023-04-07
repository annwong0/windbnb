import { Paper } from "@mui/material";
import Searchbar from "./Searchbar";
import Logo from "../logo.png";
import "../css/Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="container"> 
                <div>
                    <img 
                        src={Logo}
                        alt="logo"
                        style={{ 
                            height: "25px", 
                            paddingTop: "3px" 
                        }} 
                    />
                </div>
                <div className="navbar-searchbar">
                    <Searchbar />
                </div>
            </div>
        </div>
    )
}

export default Navbar;