import { ContactsForm } from '../ContactsForm/ContactsForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList/>
    </>
  );
};
export default App
