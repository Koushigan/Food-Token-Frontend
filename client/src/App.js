import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import {BrowserRouter,Routes, Route ,Link , Switch} from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      
        <Route path="/" exact component={Home}/>
        <Route path="/cart" exact component={Cartscreen}/>


      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
