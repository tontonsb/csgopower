import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstAttempt: true,
            rankings: []
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
        return (
            <div>
                <button>submit</button>
            </div>
        );
    }
}

export default Form;
