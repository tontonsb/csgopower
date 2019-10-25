import React from "react";
import Header from "./components/Header";
import AdminButtons from "./components/AdminButtons";
import Table from "./components/Table";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfRankers: 0,
            isAdmin: false,
            rankedTeams: [
                {
                    name: "astralis",
                    points: 177,
                    best: 1,
                    worst: 4,
                    appearances: 9
                },
                {
                    name: "evil geniuses",
                    points: 166,
                    best: 2,
                    worst: 3,
                    appearances: 9
                }
            ]
        };
        this.setRankings = this.setRankings.bind(this);
        this.toggleAdmin = this.toggleAdmin.bind(this);
    }
    setRankings() {
        console.log("Called successfully!");
        let response = [
            {
                "Ranker": "HTLV",
                "Country": "Denmark",
                "#1": "Astralis",
                "#2": "Liquid",
                "#3": "Evil Geniuses",
                "#4": "Fnatic",
                "#5": "Vitality",
                "#6": "Avangar",
                "#7": "Mousesports",
                "#8": "Renegades",
                "#9": "Natus Vincere",
                "#10": "Ence",
                "#11": "NiP",
                "#12": "Furia",
                "#13": "G2",
                "#14": "Mibr",
                "#15": "Forze",
                "#16": "Cr4zy",
                "#17": "Grayhound",
                "#18": "Heroic",
                "#19": "Tricked",
                "#20": "North"
            }
        ];
        let rankings = [];
        let allTeams = [];
        this.setState({ numOfRankers: response.length });
        for (let i = 0; i < response.length; i++) {
            let individualRanking = {
                ranker: response[i]["Ranker"],
                country: response[i]["Country"],
                rankings: []
            };
            for (let j = 1; j < 21; j++) {
                let rank = "#" + j;
                let team = response[i][rank];
                individualRanking.rankings.push(team);
            }

            rankings.push(individualRanking);
        }
        for (let i = 0; i < rankings.length; i++) {
            for (let j = 0; j < rankings[i].rankings.length; j++) {
                let team = rankings[i].rankings[j].toLowerCase().trim();
                let pointsToAdd = 20 - j;
                let index = allTeams.findIndex(obj => obj.name === team);
                if (index == -1) {
                    allTeams.push({
                        name: team,
                        points: pointsToAdd,
                        best: j + 1,
                        worst: j + 1,
                        appearances: 1
                    });
                } else {
                    allTeams[index].points += pointsToAdd;
                    allTeams[index].appearances += 1;
                    if (j < allTeams[index].best) {
                        allTeams[index].best = j + 1;
                    } else if (j > allTeams[index].worst) {
                        allTeams[index].worst = j + 1;
                    }
                }
            }
        }
        allTeams = allTeams.sort((a, b) => (a.points < b.points ? 1 : -1));
        this.setState({
            rankedTeams: allTeams
        });
        console.log(this.state.rankedTeams);
        return allTeams;
    }
    toggleAdmin() {
        this.state.isAdmin
            ? this.setState({ isAdmin: false })
            : this.setState({ isAdmin: true });
    }
    render() {
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    borderColor: color,
                    padding: 0,
                    width: "99vw",
                    left: "10px",
                    right: "10px",
                    height: 1
                }}
            />
        );
        return (
            <div>
                <Header />
                <ColoredLine color="#333" />
                <AdminButtons sheetsuCall={this.setRankings} />
                <Table
                    className="rankingsTable"
                    rankedTeams={this.state.rankedTeams}
                    rankersCount={this.state.numOfRankers}
                />
            </div>
        );
    }
}

export default App;
