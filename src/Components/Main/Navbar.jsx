import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import Hamburger from "hamburger-react";
import ListGroup from "react-bootstrap/ListGroup";

const Navbar = ({ isAuth, setIsAuth }) => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

  let Navigate = useNavigate();

  const showMenu = () => {
    setMenu((prev) => !prev);
    console.log("Working menu");
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const doubleFunction = () => {
    showMenu();
    scrollUp();
    handleClick();
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      Navigate("Login");
    });
  };

  return (
    <nav className={Styles.Navbar}>
      <div className={Styles.Left_Side}>
        <img src={""} alt="" className={Styles.Logo} />

        {/* <p className={Styles.Slogan}>HHS |</p> */}

        <div className={Styles.Navlink_Container}>
          <Link to={"/"} onClick={scrollUp} className={Styles.Navlink}>
            Home
          </Link>
          <Link to={"CreatePost"} onClick={scrollUp} className={Styles.Navlink}>
            Create Post
          </Link>
          {!isAuth ? (
            <Link to={"Login"} onClick={scrollUp} className={Styles.Navlink}>
              Login
            </Link>
          ) : (
            <button className={Styles.Logout_Button} onClick={signUserOut}>
              Logout
            </button>
          )}
        </div>
      </div>

      <div className={Styles.Right_Side}>
        <div className={Styles.Social_Icon_Tray}>
          <TwitterIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        |<BrightnessMediumIcon />
        <span className={Styles.Span}>
          <Hamburger
            className={Styles.HamburgerMenu}
            onToggle={setMenu}
            direction="right"
            color="white"
            duration={0.5}
            size={35}
          />
        </span>
      </div>

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Home
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Create Post"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <InfoIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Create Post
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Login"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <AssignmentIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Login
            </ListGroup.Item>
          </Link>
        </ListGroup>

        {/* <div className={Styles.Contact_Information_Box}>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>School</p>
            <p className={Styles.Text}>221 B Baker Street</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Contact</p>
            <p className={Styles.Text}>1 876 192 1680</p>
            <p className={Styles.Text}>hhs@gmail.com</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Social Media</p>
            <p className={Styles.Text}>221 B Baker Street</p>
          </div>
        </div> */}
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
