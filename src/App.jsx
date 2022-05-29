import './App.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageAbout } from './pages/PageAbout';

function App() {
  return (
    <div className='App'>
      <hr />
      <nav>
        <NavLink to='welcome'>Welcome</NavLink> |{' '}
        <NavLink to='books'>Books</NavLink> |{' '}
        <NavLink to='about'>About</NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path='welcome' element={<PageWelcome />} />
        <Route path='books' element={<PageBooks />} />
        <Route path='about' element={<PageAbout />} />
        <Route path='/' element={<Navigate to='welcome' />} />
      </Routes>
    </div>
  );
}

export default App;
