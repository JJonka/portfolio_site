import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'


function App() {
    return (
      <div>
      <div className='mainBackground' />
      <div className='mainBackground1' />
      <div className='mainBackground2' />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> }/>
      </Routes> 
      </div>
    )
}

export default App;
