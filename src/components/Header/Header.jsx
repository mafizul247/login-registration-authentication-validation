import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className={`nav-link ${({ isActive }) => (isActive ? 'text-primary fw-bold bg-secondary' : '')}`} aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' className={`nav-link ${({ isActive }) => (isActive ? 'text-primary fw-bold bg-secondary' : '')}`} aria-current="page">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/register' className={`nav-link ${({ isActive }) => (isActive ? 'text-primary fw-bold bg-secondary' : '')}`} aria-current="page">Register</NavLink>
                        </li>
                    </ul>
                    <div className="" role="search">
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;