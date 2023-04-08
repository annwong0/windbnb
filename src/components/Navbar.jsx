import Searchbar from "./Searchbar";
import Logo from "../logo.png";
import "../css/Navbar.css"

function Navbar({selectedStays, handleSelectStays}) {
    return (
        <div className="navbar">
            <div className="container"> 
                <div>
                    <img 
                        src={Logo}
                        alt="logo"
                        style={{ 
                            height: "20px", 
                            paddingTop: "5px" 
                        }} 
                    />
                </div>
                <div className="navbar-searchbar">
                    <Searchbar 
                        selectedStays={selectedStays} handleSelectStays={handleSelectStays} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar;