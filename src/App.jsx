import { ContactList } from './components/ContactList/ContactList';
import {ContactForm} from './components/ContactForm/ContactFormm';
import { SearchBox } from './components/SearchBox/SearchBox';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox/>
      <ContactList />
    </div>
  );
}

export default App;
