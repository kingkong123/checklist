import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';

import AddItemForm from '../components/AddItemForm';
import SearchForm from '../components/SearchForm';
import DeleteTasks from '../components/DeleteTasks';
import ItemList from '../components/ItemList';


import { addToDoItemAsync, deleteToDoItemsAsync, getToDoItemsAsync, updateToDoItemAsync } from '../services/todo-service';

const filterItems = (rawItems) => {
  const checked = rawItems.filter((i) => (i.completed));
  const unchecked = rawItems.filter((i) => (!i.completed));

  return { checked, unchecked };
};

const Index = () => {
  const [addItemValue, setAddItemValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const [checkedItems, setCheckedItems] = useState(null);
  const [uncheckedItems, setUncheckedItems] = useState(null);

  useEffect(() => {
    getToDoItemsAsync()
      .then((res) => {
        const { checked, unchecked } = filterItems(res);

        setCheckedItems(checked);
        setUncheckedItems(unchecked);
      });
  }, []);

  useEffect(() => {
    getToDoItemsAsync({ search: searchValue })
      .then((res) => {
        const { checked, unchecked } = filterItems(res);

        setCheckedItems(checked);
        setUncheckedItems(unchecked);
      })
  }, [searchValue])

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!loading && addItemValue) {
      setLoading(true);

      const res = await addToDoItemAsync(addItemValue);
      const { checked, unchecked } = filterItems(res);

      setCheckedItems(checked);
      setUncheckedItems(unchecked);

      setAddItemValue('');
      setSearchValue('');
      setLoading(false);
    }
  };

  const handleDeleteAllTasks = async () => {
    if (!loading) {
      setLoading(true);

      const res = await deleteToDoItemsAsync();
      const { checked, unchecked } = filterItems(res);

      setCheckedItems(checked);
      setUncheckedItems(unchecked);

      setAddItemValue('');
      setSearchValue('');
      setLoading(false);
    }
  }

  const handleItemClick = async ({ id, checked: _checked }) => {
    if (!loading) {
      setLoading(true);
      await updateToDoItemAsync(id, _checked);

      const res = await getToDoItemsAsync({ search: searchValue })

      const { checked, unchecked } = filterItems(res);

      setCheckedItems(checked);
      setUncheckedItems(unchecked);

      setLoading(false);
    }
  };

  return (
    <Container maxWidth={'xl'}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <h1>title</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <DeleteTasks handleDeleteAllTasks={handleDeleteAllTasks} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <AddItemForm handleFormSubmit={handleFormSubmit} addItemValue={addItemValue} setAddItemValue={setAddItemValue} loading={loading} />
        </Grid>
        <Grid item xs={12} md={6}>
          <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ItemList items={uncheckedItems} handleItemClick={handleItemClick} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ItemList checked={true} items={checkedItems} handleItemClick={handleItemClick} />
        </Grid>
      </Grid>

    </Container>
  )
};

Index.propTypes = {
  t: PropTypes.func,
  query: PropTypes.object,
  headers: PropTypes.object,
  pageId: PropTypes.string
};

export default Index;