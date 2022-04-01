import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import phonebookSelectors from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const currentContacts = useSelector(phonebookSelectors.getAllContacts);
  const onSubmit = useCallback(
    (name, number) => dispatch(addContact(name, number)),
    [dispatch]
  );

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(`Field with name -  ${name} not found`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      currentContacts.some(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
        ? alert(`${name} is already in contacts.`)
        : onSubmit(name, number);

      setName('');
      setNumber('');
    },
    [currentContacts, name, number, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group size="sm" className="mb-3">
        <Form.Control
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Form.Group>
      <Form.Group size="sm" className="mb-3">
        <Form.Control
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Add contact
      </Button>
    </form>
  );
}