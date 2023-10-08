import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import './App.css'


const App = () => {
    return (
      <div>
      <div className='mainBackground' />
      <div className='layer1' />
      <div className='layer2' />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/work' element={ <Work /> } />
        <Route path='/contact' element={ <Contact /> }/>
      </Routes> 
      </div>
    )
}

export default App;
