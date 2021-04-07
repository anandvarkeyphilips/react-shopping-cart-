import './App.css';
import walmart from "./walmart.png"

function Header() {
  return (
    <div className="container">
      <img src={walmart} alt="Logo of Walmart"/>
      <h1>Walmart Shopping</h1>
    </div>
  );
}

export default Header;
