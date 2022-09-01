import './App.css';
import Navbar from './components/layout/Navbar';
import ItemListContainer from './components/layout/ItemListContainer'



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer titulo="E-commerce en construcion!!" />
    </div>
  );
}

export default App;
