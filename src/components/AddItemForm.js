import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';

const AddItemForm = ({ handleFormSubmit, addItemValue, setAddItemValue, loading }) => (
  <form onSubmit={handleFormSubmit}>
    <TextField
      size="small"
      value={addItemValue}
      onChange={(event) => (setAddItemValue(event.target.value))}
    />
    <Button variant="outlined" size="large" onClick={handleFormSubmit} disabled={loading}>Add</Button>
  </form>
);

AddItemForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  addItemValue: PropTypes.string,
  setAddItemValue: PropTypes.func,
  loading: PropTypes.bool
};

export default AddItemForm;