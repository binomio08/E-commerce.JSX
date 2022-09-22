import './App.css';
import Navbar from './components/layout/Navbar';
import ItemListContainer from './components/layout/ItemListContainer';
import ItemDetailsContainer from './components/layout/ItemDetailsContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './components/layout/Cart';
import Provider from './components/layout/Contex';



function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/detail/:id' element={<ItemDetailsContainer/>} />
          <Route path='/:categoria' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
