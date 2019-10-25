import React from "react";
import Dragula from "react-dragula";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstAttempt: true,
            teams: [
                { name: "Astralis", rank: 1 },
                { name: "Liquid", rank: 2 },
                { name: "EG", rank: 3 }
            ]
        };
    }
    completeRankings() {
        if (this.state.isFirstAttempt) {
            this.setState({ isFirstAttempt: false });
            alert("Are you sure? This cannot be undone.");
        } else {
            // submit to something
        }
    }
    render() {
        const listTeams = this.state.teams.map(team => (
            <div className="formElem" key={team.name}>
                {team.name}
            </div>
        ));
        return (
            <div>
                <div className="teamForm" ref={this.dragulaDecorator}>
                    {listTeams}
                </div>
                <button>submit</button>
            </div>
        );
    }
    dragulaDecorator = componentBackingInstance => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    };
}

export default Form;
