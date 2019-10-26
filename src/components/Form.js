import React from "react";
import dragula from "react-dragula";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstAttempt: true,
            unrankedTeams: [
                "Astralis",
                "Liquid",
                "Evil Geniuses",
                "fnatic",
                "Vitality",
                "Avangar",
                "Mousesports",
                "Rengades",
                "Natus Vincere",
                "ENCE",
                "NIP",
                "Complexity",
                "Furia",
                "G2",
                "forZe",
                "Cr4zy",
                "MIBR",
                "North",
                "Heroic",
                "FaZe"
            ]
        };
        this.test = this.test.bind(this);
        this.completeRankings = this.completeRankings.bind(this);
    }
    completeRankings() {
        if (this.state.isFirstAttempt) {
            this.setState({ isFirstAttempt: false });
            alert("Are you sure? This cannot be undone.");
        } else {
            // submit to something
        }
    }
    test() {
        let rankedTeamsArray = document
            .getElementById("rightTeams")
            .innerText.split("\n");
        // ["Team1", "Team2", "Team3"...]
        let submission = {
            Ranker: "User",
            Country: "Country"
        };
        for (let i = 0; i < rankedTeamsArray.length; i++) {
            let rank = i + 1;
            submission[rank] = rankedTeamsArray[i];
        }
        console.log(submission);
    }

    render() {
        const listTeams = this.state.unrankedTeams.map(team => (
            <div id={team} className="formElem" key={team}>
                {team}
            </div>
        ));
        return (
            <div>
                <div id="formBoxes">
                    <div id="leftTeams">{listTeams}</div>
                    <div id="rightTeams"></div>
                </div>
                <button onClick={this.test}>submit</button>
            </div>
        );
    }
    componentDidMount() {
        dragula([
            document.getElementById("leftTeams"),
            document.getElementById("rightTeams")
        ]);
    }
}

export default Form;
