import React from "react";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";
import {Button} from "react-bootstrap-buttons";
import 'bootstrap/dist/css/bootstrap.css';
import '../Meal_page/node_modules/react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

import setStateAction from "../../actions/actionTab";

import { connect } from "react-redux";

const formStyle = {
    'fontWeight': 'bold',
    color: 'rgb(60,0,8)',
    backgroundColor: 'rgb(255,255,255)',
    'borderRadius': '7px',
    opacity: 0.86
};

const buttonStyle1 = {
    transform: "translateY(-5px)"
};

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.toMainPage = this.toMainPage.bind(this);
        this.toTasks = this.toTasks.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    Name;
    StartDate;
    EndDate;
    Notes;
    newTaskAmt;

    toMainPage() {
        return this.props.setTab("meal");
    }

    toTasks() {
        return this.props.setTab("task");
    }

    handleName(event) {
        this.Name = event.target.value;
    }

    handleStartDate(event) {
        this.StartDate = event.target.value;
    }

    handleEndDate(event) {
        this.EndDate = event.target.value;
    }

    handleNotes(event) {
        this.Notes = event.target.value;
    }

    submitTask() {
        {console.log(this.props)}
        let startYear = this.StartDate.substring(0, 4);
        let startMonth = this.StartDate.substring(5, 7);
        let startDate = this.StartDate.substring(8, 10);
        if(startMonth.substring(0, 1) === "0"){
            startMonth = startMonth.substring(1, 2)
        }
        if(startDate.substring(0, 1) === "0"){
            startDate = startDate.substring(1, 2)
        }

        let endYear = this.EndDate.substring(0, 4);
        let endMonth = this.EndDate.substring(5, 7);
        let endDate = this.EndDate.substring(8, 10);
        if(endMonth.substring(0, 1) === "0"){
            endMonth = endMonth.substring(1, 2)
        }
        if(endDate.substring(0, 1) === "0"){
            endDate = endDate.substring(1, 2)
        }
        let newEvent = {
            id: this.props.taskAmnt + 1,
            title: this.Name,
            start: new Date(startYear, startMonth, startDate),
            end: new Date(endYear, endMonth, endDate),
            desc: this.Notes
        };
        this.newTaskAmnt = this.props.taskAmnt + 1;
        let newTask = this.props.events.add(newEvent)
        return this.props.setTask(newTask)
    }

    render() {
        return (
            <div>
                <div>
                    <div style={formStyle}>
                        <h1>Add a new task</h1>
                        <Form className="form">
                            <Col>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input
                                        type="textarea"
                                        name="text"
                                        id="TaskName"
                                        placeholder="Task name"
                                        onChange = {this.handleName.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Start date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="StartTaskDate"
                                        placeholder="date placeholder"
                                        onChange = {this.handleStartDate.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>End date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="EndTaskDate"
                                        placeholder="date placeholder"
                                        onChange = {this.handleEndDate.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Notes</Label>
                                    <Input
                                        type="textarea"
                                        name="text"
                                        id="TaskNotes"
                                        placeholder="Notes"
                                        onChange = {this.handleNotes.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Button btnStyle="warning"  style = {buttonStyle1} onClick={this.toMainPage}>Back</Button>
                            <Button btnStyle="warning"  style = {buttonStyle1} onClick={this.submitTask}>Submit</Button>
                        </Form>
                    </div>
                </div>
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

function mapDispatchToProps(dispatch) {
    return {
        setStateFunction: tab => {
            dispatch(setStateAction(tab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms);