import axios from 'axios';

axios.defaults.baseURL = 'https://6244c6037701ec8f72494695.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function removeContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}