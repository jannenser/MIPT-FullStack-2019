import React from "react";
import Register from "../../components/register_form";
import SignUp from "../../components/login_form";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

const insideStyles = {
    transform: "scale(2,2)translate(0, 90px)",
    textAlign: "center",
};

class LoginWindow extends React.Component {
    constructor(props) {
        super(props);
        this.toSignUp = this.toSignUp.bind(this)
    }

    toSignUp() {
        return this.props.setStage("signup");
    }
    render() {
        switch (this.props.stage){
            case 'hello' :
                return <div style={insideStyles}>
                    <Button onClick={this.toSignUp} lg btnStyle="warning">
                        <h1 id="startbutton"> Start </h1>
                    </Button>
                </div>;
            case 'signup':
                return <div>
                    <SignUp/>
                </div>;
            case 'register':
                return <div>
                    <Register/>
                </div>;
            case 'calendar':
                this.toSignUp();
                return <div>
                    <Redirect to="/calendar" />
                    </div >;
            default:
                return null
        }
    }
}

export default LoginWindow;