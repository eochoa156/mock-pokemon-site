import { TextField, InputAdornment } from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function SearchForm () {
    return (
        <div>
            <TextField 
                id="filled-basic" 
                label="Search Pokemon" 
                variant="filled" 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchSharpIcon />
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}

export default SearchForm;