import React from "react";
import Header from "../../components/header";
import Main from "../../components/meal_page";

import {connect} from "react-redux"


class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.MealInfo.user,
        tab: state.MealInfo.tab
    }
}

export default connect(mapStateToProps)(MainPage);