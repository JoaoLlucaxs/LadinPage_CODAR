import Header from "./Components/Header/Header";
import {BrowserRouter} from 'react-router-dom'
import Roters from './routes/route'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Roters/>
    </BrowserRouter>

    </>
  );
}

export default App;
