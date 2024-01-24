import React from "react";
import Image from "next/image";
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import FilterButton from "../FilterButton/FilterButton";

const NavBar = () => {
  return (
    <div className="navBar">
      <div >
        <Image src="/gdsc_logo.png" alt="logo" width={120} height={120} className={style.logo} />
      </div>
      <SearchBar />
      <FilterButton />
    </div>
  );
};

export default NavBar;
