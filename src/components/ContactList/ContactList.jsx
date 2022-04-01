import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import phonebookSelectors from 'redux/contacts/contactsSelectors';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(phonebookSelectors.getCurrentContacts);
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ListGroup>
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item key={id}>
          <p>
            <span>{name}:</span> {number}
          </p>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}