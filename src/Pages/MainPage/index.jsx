import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../css/main.module.css";
import HeroSection from "./Sections/HeroSection";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
    </div>
  );
};

export default MainPage;
