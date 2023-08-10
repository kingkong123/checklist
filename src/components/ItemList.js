import React from 'react';
import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import TodoItem from './TodoItem';

const ItemList = ({ checked = false, items, handleItemClick }) => {
  const title = checked ? 'Done' : 'To Do';

  return (
    <>
      <h2>{title}</h2>
      <Stack>
        {items && items.map((item) => (<TodoItem {...item} handleItemClick={handleItemClick} key={item.id} />))}
      </Stack>
    </>
  );
}

ItemList.propTypes = {
  checked: PropTypes.bool,
  items: PropTypes.array,
  handleItemClick: PropTypes.func
};

export default ItemList;
