import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <Navbar sticky="top" className="mb-4" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to="/">
            Dragon News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button className="ms-2 text-muted border border-muted" onClick={handleLogOut} variant="light" size="sm">
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button className={loading && "d-none"} onClick={() => navigate("/login")} variant="outline-primary" size="sm">
                    Login
                  </Button>

                  <Button onClick={() => navigate("/register")} className={`ms-2 ${loading && "d-none"}`} variant="primary" size="sm">
                    Register
                  </Button>
                </>
              )}
            </Nav.Link>
            <Link className="mt-2" to="/profile">
              {user?.photoURL ? <Image style={{ height: "30px" }} roundedCircle src={user?.photoURL}></Image> : <FaUser></FaUser>}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
