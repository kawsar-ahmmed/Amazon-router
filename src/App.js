import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Invantory from "./components/Imvantory/Invantory";

function App() {
  return (
    <div>
      <Header />
      <Shop />
        <Invantory />
    </div>
  );
}

export default App;
