import './App.css';
import Navbar from './components/layout/Navbar';
import ItemListContainer from './components/layout/ItemListContainer'
import Itemcount from './components/layout/ItemCount';



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer titulo="E-commerce en construcion!!" />
      <Itemcount stock={10} initial={1}  onAdd={0} />
    </div>
  );
}

export default App;
