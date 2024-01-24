import React from "react";
import styles from "./SearchIcon.module.css";
import Image from "next/image";

const SearchIcon = () => {
  return (
    <Image
      src="/search.png"
      alt=""
      width={30}
      height={30}
      className={styles.search}
    />
  );
};

export default SearchIcon;
