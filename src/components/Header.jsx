import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/chisiamo">Chi siamo</NavLink>
            <NavLink to="/prodotti">Prodotti</NavLink>
        </nav>
    )
}

export default Header