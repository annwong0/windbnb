import { Paper } from "@mui/material";
import Searchbar from "./Searchbar";
import Logo from "../logo.png";

function Navbar() {
    return (
        <div>
            <Paper 
                elevation={1}
                style={{
                    display:"flex", 
                    flexWrap:"wrap", 
                    justifyContent:"space-between",
                    padding:"5px 10px",
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
                <Searchbar />
            </Paper>
        </div>
    )
}

export default Navbar;