import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"

function Menu() {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/products">Products</Link>

                </li>
                <li>
                    <Link to="/aboutus">AboutUs</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>

                </li>
                <li>
                    <Link to ="/feedback">Feedback</Link>
                </li>

            </ul>
        </React.Fragment>

    )

}

export default Menu;
