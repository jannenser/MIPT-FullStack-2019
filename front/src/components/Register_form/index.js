import React from "react";
import {Button} from 'react-bootstrap-buttons';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

// reactstrap components
import {
    FormGroup,
    Form,
    Input,
    Col,
    Label
} from "reactstrap";
import setStateAction from "../../actions/actionStage";
import {connect} from "react-redux";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
};
const insideStyles = {
    height: '50%',
    width: '50%',
    transform: "translate(50%, 200px)",
};
const formStyle = {
    'fontWeight': 'bold',
    color: 'rgb(60,0,8)',
    backgroundColor: 'rgb(255,255,255)',
    'borderRadius': '7px',
    opacity: 0.86
};
const buttonStyle = {
    transform: "translate(0, -10%)"
};

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.toSignUp = this.toSignUp.bind(this);
        this.toMainPage= this.toMainPage.bind(this);
    }

    toSignUp() {
        return this.props.setStage("signup");
    }

    toMainPage(){
        return this.props.setStage("meal");
    }

    render() {
        return (
            <div style={formStyle}>
                <h1>Create an account</h1>
                <Form>
                    <Col>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="name@example.com" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type="text" name="Name" id="Name" placeholder="name"/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for="Birth">Birth</Label>
                        <Input type="date" name="date" id="date" placeholder="01.01.2000"/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for="Weight1">Weight</Label>
                        <Input type="text" name="Weight" id="Weight1"/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for="Height1">Height</Label>
                        <Input type="text" name="Height" id="Height1"/>
                    </FormGroup>
                    </Col>
                    <FormGroup tag="fieldset">
                        <legend className="col-form-label col-sm-2">Sport?</legend>
                        <Col>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Often
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Sometimes
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Rare
                            </Label>
                        </FormGroup>
                        </Col>
                    </FormGroup>
                    <Button style = {buttonStyle} btnStyle="warning" onClick={this.toSignUp}>Back</Button>
                    <Button style = {buttonStyle} btnStyle="warning" onClick={this.toMainPage}>Submit</Button>
                    </Form>
            </div>
        );
    }
}

class Register extends React.Component{
    render(){
        return(
            <div style={styles}>
                <div style={insideStyles}>
                    <Forms setStage={this.props.setStateFunction}/>
                </div>
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

function mapDispatchToProps(dispatch) {
    return {
        setStateFunction: stage => {
            dispatch(setStateAction(stage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);