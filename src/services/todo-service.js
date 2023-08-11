const baseUrl = process.env.REACT_APP_API_ENDPOINT;

const getToDoItemsAsync = async (opt = {}) => {
  let query = '';

  if (opt.search) {
    const { search } = opt;
    query = new URLSearchParams({ search }).toString();
  }

  const result = await fetch(`${baseUrl}/items${opt?.search ? `?${query}` : ''}`);
  const json = await result.json();

  return json.data;
}

const addToDoItemAsync = async (itemName = '') => {
  if (itemName) {
    const res = await fetch(`${baseUrl}/items`, {
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
    const res = await fetch(`${baseUrl}/items`, {
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
  const res = await fetch(`${baseUrl}/items`, {
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