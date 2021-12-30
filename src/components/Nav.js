import React from "react";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid d-flex justify-content-between">
                        <span className="navbar-brand mb-0 h1">Super Hero Memory Game</span>
                        <div>
                            <span className="navbar-text text-light p-5">
                                Score: {this.props.score}
                            </span>
                            <span className="navbar-text text-light">
                                Top Score: {this.props.topScore}
                            </span>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-dark bg-dark mt-1">
                    <h5 className="text-light">Pick and card once but not twice</h5>
                </nav>
            </>

        )
    }
}

export default Nav