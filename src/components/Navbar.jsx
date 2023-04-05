import { Paper } from "@mui/material";
import Searchbar from "./Searchbar";
import Logo from "../logo.png";
import "../css/Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <Paper 
                elevation={0}
                style={{
                    display:"flex", 
                    flexWrap:"wrap", 
                    justifyContent:"space-between",
                    padding: "20px 5% 20px 5%",
                }}
             >
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
            </Paper>
        </div>
    )
}

export default Navbar;