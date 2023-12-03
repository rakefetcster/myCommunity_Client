
import axios from 'axios';


// const getAll = (url) => axios.get(url);

const getById = (url, id) => axios.get(`${url}/${id}`);

const postItem = (userUrl, obj) => axios.post(`${userUrl}`, obj);
// const postUser = (url, obj) => axios.patch(`${url}`, obj);

// const updateItem = (url, id, obj) => axios.patch(`${userUrl}/${id}`, obj);

// const deleteItem = (url, id) => axios.delete(`${url}/${id}`);

export { postItem,getById};