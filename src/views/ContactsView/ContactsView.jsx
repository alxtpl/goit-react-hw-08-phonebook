import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { BallTriangle } from 'react-loader-spinner';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import phonebookSelectors from 'redux/contacts/contactsSelectors';

export default function ContactsView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(phonebookSelectors.getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={''}>
      <div className={''}>
        <h2 className={''}>Phonebook</h2>
        <ContactForm />
      </div>
      <div className={''}>
        <h2 className={''}>Contacts</h2>
        <Filter />
        {isLoading && (
          <BallTriangle type="Grid" color="grey" height={100} width={100} />
        )}
        <ContactList />
      </div>
    </div>
  );
}