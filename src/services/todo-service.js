const baseUrl = process.env.REACT_APP_API_ENDPOINT;

const getToDoItemsAsync = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/get-items`);
  const json = await result.json();

  return json.data;
}

const addToDoItemAsync = async (itemName = '') => {
  if (itemName) {
    const res = await fetch(`${baseUrl}/add-item`, {
      method: 'POST',
      mode: 'cors',
      eferrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ itemName })
    });

    const json = await res.json();

    return json.data;
  }

  return null;
}

const updateToDoItemAsync = async (id, checked) => {
  if (id) {
    const res = await fetch(`${baseUrl}/update-item`, {
      method: 'PUT',
      mode: 'cors',
      eferrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, checked })
    });

    const json = await res.json();

    return json.data;
  }

  return null;
};

const deleteToDoItemsAsync = async () => {
  const res = await fetch(`${baseUrl}/delete-items`, {
    method: 'DELETE',
    mode: 'cors',
    eferrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const json = await res.json();

  return json.data;
};

export { addToDoItemAsync, deleteToDoItemsAsync, getToDoItemsAsync, updateToDoItemAsync };