import walmart from "./walmart.svg"

function Header() {
  return (
      <div className="container-fluid">
          <div className="row bg-dark text-white align-items-center">
              <img src={walmart} alt="Walmart LOGO" className="col-4"/>
              <h1 className="col-8">Walmart Shopping</h1>
          </div>

      </div>
  )
}
export default Header;
