import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
	return (
		<div className="header">
			<h3 className="title">Travel Advisor</h3>
			<form id="form" role="search">
				<h4>Explore New Places</h4>
				<div className="searchBar">
					<input
						type="search"
						className="searchText"
						name="q"
						placeholder="Search..."
						aria-label="Search through site content"
					/>
					<a href="https://" className="searchIcon">
						<SearchIcon />
					</a>
				</div>
			</form>
		</div>
	);
};

export default Header;
