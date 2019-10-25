import React from "react";

function Table(props) {
    let counter = 1;
    const listItems = props.rankedTeams.map(teamObject => (
        <tr key={teamObject.name}>
            <th>{counter++}</th>
            <th>{teamObject.name.toUpperCase()}</th>
            <th>{teamObject.points}</th>
            <th>
                {teamObject.appearances}/{props.rankersCount}
            </th>
        </tr>
    ));
    return (
        <div className="rankingsTableContainer">
            <table className="rankingsTable">
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Team</th>
                        <th>Points</th>
                        <th>Top 20</th>
                    </tr>
                    {listItems}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
