import React from "react";
import {Parallax} from "react-parallax";
import TabsWindow from "../../containers/Tabs_window"
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import setStateAction from "../../actions/actionTab";

import { connect } from "react-redux"

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "rgba(135,147,154,0.46)",
};
const insideStyles = {
    height: 900,
};
const image = require('./wallpaper.jpg');

class Main extends React.Component{
    render() {
        return (<div>
            <div style={styles}>
                <Parallax bgImage={image} strength={500} blur={0}>
                    <div style={insideStyles}>
                        <TabsWindow setTab={this.props.setStateFunction}/>
                    </div>
                </Parallax>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        user: state.MealInfo.user,
        tab: state.MealInfo.tab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setStateFunction: tab => {
            dispatch(setStateAction(tab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);