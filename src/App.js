
import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Task from './pages/Task';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ <Home />} />
        <Route path='/' element={ <Task />} />
        <Route path='/update/:id' element={ <UpdateProduct />} />
      </Routes>
    
    </div>
  );
}

export default App;
