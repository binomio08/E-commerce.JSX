import './App.css';
import Navbar from './components/layout/Navbar';
import Itemcount from './components/layout/ItemCount';
import ItemListContainer from './components/layout/ItemListContainer';
import ItemDetailsContainer from './components/layout/ItemDetailsContainer';



function App() {
  return (
    <div>
      <Navbar />
      <Itemcount stock={10} initial={1}  onAdd={0} />
      <ItemListContainer />
      <ItemDetailsContainer />
    </div>
  );
}

export default App;
