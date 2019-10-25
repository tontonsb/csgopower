import React from "react";

function Header(props) {
    return (
        <div className="navBar">
            <div className="navBrand">logo, Community Power Rankings</div>
            <a className="navLink">Community Rankings</a>
            <a className="navLink">My Rankings</a>
        </div>
    );
}

export default Header;
