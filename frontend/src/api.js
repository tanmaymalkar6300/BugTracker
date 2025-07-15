import axios from 'axios';
const API = 'http://localhost:8000';

export const getBugs = () => axios.get(`${API}/bugs`);
export const addBug = (bug) => axios.post(`${API}/bugs`, bug);
export const removeBug = (id) => axios.delete(`${API}/bugs/${id}`);
export const resolveBug = (id, bug) => axios.put(`${API}/bugs/${id}`, bug);