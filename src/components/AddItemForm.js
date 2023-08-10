import PropTypes from 'prop-types';
import { Button, InputAdornment, TextField } from '@mui/material';

const AddItemForm = ({ handleFormSubmit, addItemValue, setAddItemValue, loading }) => (
  <form onSubmit={handleFormSubmit}>
    <TextField
      size="small"
      value={addItemValue}
      onChange={(event) => (setAddItemValue(event.target.value))}
      InputProps={{
        endAdornment: <InputAdornment position="end"><Button onClick={handleFormSubmit} disabled={loading}>Add</Button></InputAdornment>,
      }}
    />
  </form>
);

AddItemForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  addItemValue: PropTypes.string,
  setAddItemValue: PropTypes.func,
  loading: PropTypes.bool
};

export default AddItemForm;