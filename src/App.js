import Header from "./Components/Header/Header";
import {BrowserRouter} from 'react-router-dom'
import Roters from './routes/route'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Roters/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
