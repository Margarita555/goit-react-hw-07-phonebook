import axios from 'axios';
axios.defaults.baseURL = 'https://61cf520e65c32600170c7f3a.mockapi.io/api/v1';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}
