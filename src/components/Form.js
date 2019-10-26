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
            .getElementById("dropTarget")
            .innerText.split("\n");
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
                <div id="container">
                    <div id="dragElements">{listTeams}</div>
                    <div id="dropTarget"></div>
                </div>
                <button onClick={this.test}>submit</button>
            </div>
        );
    }
    componentDidMount() {
        dragula(
            [
                document.getElementById("dragElements"),
                document.getElementById("dropTarget")
            ],
            {
                revertOnSpill: true,
                mirrorContainer: document.body
            }
        );
    }
}

export default Form;
