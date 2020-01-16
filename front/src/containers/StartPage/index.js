import React from "react";
import Header from "../../components/header";
import StartPage from "../../components/Start_page";

import {connect} from "react-redux"

class GetStarted extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <StartPage/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.startStageInfo.user,
        stage: state.startStageInfo.stage
    }
}

export default connect(mapStateToProps)(GetStarted);