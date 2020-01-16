import React from "react";
import {Parallax} from "react-parallax";
import LoginButton from "../../containers/loginWindow"
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import setStateAction from "../../actions/actionStage";

import { connect } from "react-redux"

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "rgba(145,79,91,0.46)"
};
const insideStyles = {
    height: 1100,
};
const image1 = require('./wallpaper.jpg');

class Main extends React.Component{
    render() {
        return (<div>
            <div style={styles}>
                <Parallax bgImage={image1} strength={500} blur={0}>
                    <div style={insideStyles}>
                        <LoginButton setStage={this.props.setStateFunction}/>
                    </div>
                </Parallax>
            </div>
            <div style={{'textAlignAll': 'right', 'lineHeight': '13px'}}>
                <h1 className="bottomline"> A perfect app which will help you to stay fit and healthy</h1>
            </div>
        </div>);
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);