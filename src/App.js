import './App.css';
import Navbar from './components/layout/Navbar';
import Itemcount from './components/layout/ItemCount';
import ItemListContainer from './components/layout/ItemListContainer';
import ItemDetailsContainer from './components/layout/ItemDetailsContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<ItemListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailsContainer/>} />
        <Route path='/home/:categoria' element={<ItemListContainer/>} />

      </Routes>
      <Itemcount stock={10} initial={1}  onAdd={0} />
    </BrowserRouter>
  );
}

export default App;
