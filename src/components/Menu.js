import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../css/main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
  let { isMenuOpen, setIsMenuOpen } = props;
  let menuList = ["FAQ", "Program", "Venue", "COMPRAR ENTRADAS"];

  return (
    <div className={isMenuOpen ? styles.Menu : styles.MenuHide}>
      <div className={styles.bgLogo}></div>
      <div className={styles.menuContent}>
        <div className={styles.Navbar}>
          <div
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} color="#fff" size="xl" />
          </div>
          <div className={styles.logoWrapper}>
            <img src={require("../assets/logo.png")} className={styles.logo} />
          </div>
        </div>
        <div className={styles.menuLeftWrapper}>
          {menuList?.map((item, index) => {
            return (
              <div key={index} className={styles.menuLeftItem}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
