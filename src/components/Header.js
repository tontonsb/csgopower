import React from "react";

function Header(props) {
    if (props.isHome) {
        return (
            <div className="navBar">
                <div className="title">Community Power Rankings</div>
                <div>
                    <button className="switchButton" onClick={props.switch}>
                        Set my rankings
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navBar">
                <div className="title">Community Power Rankings</div>
                <div>
                    <button className="switchButton" onClick={props.switch}>
                        See the rankings
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
