import "./Nav.css";
 import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div>
        <nav>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="./Login">Account</Link></li>
                <li><Link to="./movies">Movie List</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;