import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = ({ searchValue, setSearchValue }) => (
  <TextField
    fullWidth
    size="small"
    placeholder="Search..."
    value={searchValue}
    InputProps={{
      startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
    }}
    onChange={(event) => (setSearchValue(event.target.value))}
  />
);

SearchForm.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func
};

export default SearchForm;