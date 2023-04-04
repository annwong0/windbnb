import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import SearchIcon from '@mui/icons-material/Search';

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
                <ButtonGroup color="error">
                    <Button>Location</Button>
                    <Button>Add Guests</Button>
                    <Button 
                        endIcon={<SearchIcon />} 
                        style={{ paddingLeft: "5px"}} 
                    />
                </ButtonGroup>
            </Paper>
        </div>
    )
}

export default Navbar;