import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import phonebookSelectors from 'redux/contacts/contactsSelectors';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(phonebookSelectors.getCurrentContacts);
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={''}>
      {contacts.map(({ id, name, number }) => (
        <li className={''} key={id}>
          <p className={''}>
            <span className={''}>{name}:</span>{' '}
            {number}
          </p>
          <button
            className={''}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}