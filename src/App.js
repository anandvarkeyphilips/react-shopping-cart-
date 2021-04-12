import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Menu from "./Menu";
import { BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div >
      <Header></Header>
      <BrowserRouter>
        <Menu></Menu>
        <Main></Main>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
