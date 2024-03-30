"use client";

import React,{ useState } from "react";
import styles from "./search.module.css";
import SearchIcon from "../SearchIcon/SearchIcon";
import { useRouter } from 'next/navigation';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Assuming you have a way to find the scholarship ID based on the search term
    // For now, let's simulate finding an ID and navigating to the scholarship page
    router.push(`/scholarships/${encodeURIComponent(searchTerm)}`);
 };


  return (
    <form onSubmit={handleSearch}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search Scholarship..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
