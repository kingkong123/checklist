import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';

const TodoItem = ({ id, itemName, completed, handleItemClick }) => {
  const handleOnChange = (event) => {
    event.preventDefault();
    handleItemClick({ id, checked: !completed });
  };

  return (
    <FormControlLabel control={<Checkbox checked={completed} onChange={handleOnChange} />} label={itemName} />
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  itemName: PropTypes.string,
  completed: PropTypes.bool
};

export default TodoItem;
