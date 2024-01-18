import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';
import Products from './components/Books';
import Product from './components/Book';
import Error from './components/Error';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Books from './components/Books';
import Book from './components/Book';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <div className='container'>
        <Router>
          <Navbar />
          <Registration/>

          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/books' element={<Books />} />
            <Route path='/book' element={<Book/>} />
            <Route path='/contact' element={<Contact/>} />

            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </div>

      <NotificationContainer />
    </div>
  );
}

export default App;
