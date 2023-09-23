import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../../css/main.module.css";
import Navbar from "../../../components/Navbar";
import Spline from "@splinetool/react-spline";
import { Col, Row } from "react-bootstrap";

const HeroSection = () => {
  let menuList = ["FAQ", "Program", "Venue", "COMPRAR ENTRADAS"];
  const Model3D = () => {
    return (
      <div className={styles.modelWrapper}>
        <Spline
          className={styles.Model}
          scene="https://prod.spline.design/zyvry2ZLsxieWBwb/scene.splinecode"
        />
      </div>
    );
  };

  const BottomMenu = () => {
    return (
      <Row className={styles.bottomMenuWrapper}>
        <Col lg="8"></Col>
        <Col className={styles.bottomMenuCol}>
          <div className={styles.menuWrapper}>
            {menuList?.map((item, index) => {
              let itemStyle=index==3?styles.menuItemActive:styles.menuItem
              return (
                <div className={itemStyle} key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.heroSectionWrapper}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Row>
          <Col className={styles.ModelCol}>
            <Model3D />
          </Col>
          <Col className={styles.TitleCol}>
            <div className={styles.HeroTitle}>
              <span>
                WHERE
                <br />
                IS THE
              </span>
              <br />
              <div>AFTER?</div>
            </div>
          </Col>
        </Row>
      </div>
      <BottomMenu />
    </div>
  );
};

export default HeroSection;
