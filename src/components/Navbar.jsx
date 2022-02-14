import { Link } from "react-router-dom";

const Navbar = () => {
  return <>
    <nav className="navbar navbar-light bg-light shadow p-3 m-2 bg-body rounded">
      <div className="container">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <Link to='user/add' className="btn btn-md btn-primary"><i className="fa-solid fa-user-plus"> Add User </i></Link>
        <Link to="contact" className="navbar-brand">Contact Us</Link>
      </div>
    </nav>
  </>
}

export default Navbar;
