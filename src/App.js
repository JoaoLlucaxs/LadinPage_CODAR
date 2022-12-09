import Header from "./Components/Header/Header";
import {BrowserRouter} from 'react-router-dom'
import Roters from './routes/route'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
    <BrowserRouter>
      <Roters/>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
