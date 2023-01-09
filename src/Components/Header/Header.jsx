import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
	return (
		<div className="header">
			<h1>Travel Advisor</h1>
			<div className="searchBar">
				<h1>Explore New Places</h1>
				<SearchIcon id="query" />
				<input type="search" id="query" name="q" placeholder="Search..." />
			</div>
		</div>
	);
};

export default Header;
