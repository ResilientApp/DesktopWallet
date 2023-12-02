import resdb from "../images/resdb.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "#FCF5F3" }}
        >
            <div
                className="container-fluid"
                style={{ justifyContent: "space-apart" }}
            >
                <img
                    src={resdb}
                    alt="resdb_logo"
                    style={{ marginLeft: "2%", borderRadius: "5px" }}
                    width="175"
                    height="60"
                />
                <div style = {{display: 'flex', gap: '20px', marginRight: "4%"}}>
                    <Link to = "/signin" style = {{textDecoration: 'none'}}><h5 style = {{color: 'black'}}>Sign in</h5></Link>
                    <Link to = "/register" style = {{textDecoration: 'none'}}><h5 style = {{color: 'black'}}>Register</h5></Link>
                </div>
            </div>
        </nav>
    );
};
