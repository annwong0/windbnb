import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
    return (
        <div>
            <ButtonGroup color="error">
                <Button>Location</Button>
                <Button>Add Guests</Button>
                <Button 
                    endIcon={<SearchIcon />} 
                    style={{ paddingLeft: "5px"}} 
                />
            </ButtonGroup>
        </div>
    )
}

export default Searchbar;