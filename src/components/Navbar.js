import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../css/main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.Navbar}>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={styles.menuIcon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={faBars} color="#b0f542" size="xl" />
      </div>
      <div className={styles.logoWrapper}>
        <img src={require("../assets/logo.png")} className={styles.logo} />
      </div>
    </div>
  );
};

export default Navbar;
