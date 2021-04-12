import Header from "./Header";
import { Footer } from "./Footer"
import Menu from "./Menu";
import Main from "./Main";
import { BrowserRouter} from "react-router-dom"
//functional component
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
