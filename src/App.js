import './App.css';
import Header from '../src/components/Header';
import Contact from '../src/components/Contact';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
        <Header />
        <div className='container'>
          {contacts.map(item => 
            <Contact data={item} key={item.id}/>
          )}
        </div>
    </div>
  );
}

export default App;
