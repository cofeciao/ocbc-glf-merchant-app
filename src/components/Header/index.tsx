// import modules
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

// import styles
import styles from "./Header.scss";

// import logo
import logo from "@/assets/images/logo-ocbc.svg";
import favicon from "../../../public/images-favicon/favicon.png";

// import type
import { IHeader } from "./Header";

const Header = (props: IHeader) => {
  const { title, logoHref } = props;

  // states
  const [isScrolled, setIsScrolled] = useState(false);

  // classnames
  const cx = classNames.bind(styles);
  const mediaQuery = window.matchMedia("(max-width: 992px)");
  const [isMobile, setIsMobile] = useState<boolean>(mediaQuery.matches);

  /**
   * Detect mobile version
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Detect scroll to hide Header
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cx(`header-wrapper ${isMobile && "mobile-version"}`)}>
      <header className={cx(`header ${isScrolled ? "scroll" : ""}`)}>
        <a href={logoHref} className={cx("logo")}>
          <img src={isMobile ? favicon : logo} alt="OCBC Bank" />
        </a>
        <div className={cx("divider")}></div>
        <h1 className={cx("title")}>{title}</h1>
      </header>
    </div>
  );
};

export default Header;
