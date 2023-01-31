
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import CmirApi from './components/CmirApi'
import Personaje from './components/Personaje'


function App () {
  return (
    <div className="contenedor">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CmirApi/>}></Route>
      <Route path='/Personaje/:id' element={<Personaje/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;