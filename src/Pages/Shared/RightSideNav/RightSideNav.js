import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FcRules } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { user, loading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {!user?.uid && !loading && (
        <ButtonGroup vertical>
          <Button onClick={handleGoogleSignIn} className="mb-2 px-5" variant="outline-primary">
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub /> Login with Github
          </Button>
        </ButtonGroup>
      )}
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2" action>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" action>
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" action>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" action>
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" action>
            <FcRules /> Terms & Conditions
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
