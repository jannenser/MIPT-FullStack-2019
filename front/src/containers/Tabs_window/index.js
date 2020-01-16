import React from "react";
import { Button } from "react-bootstrap-buttons";
import Tasks from "../../components/Tasks_tab";
import ListMeal from "../../components/List_meal"
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

const Styles = {
    bigbutton: {
		backgroundColor: 'orange',
		borderRadius: '5px',
        padding: '5px',
        margin: '8px',
		border: '8px',
		cursor: 'pointer'
	}
};

class TabsWindow extends React.Component {
    constructor(props) {
        super(props);
        this.toMainPage = this.toMainPage.bind(this);
        this.toTasks = this.toTasks.bind(this);
        this.toStart = this.toStart.bind(this);
    }

    toMainPage() {
        return this.props.setTab("meal");
    }

    toTasks() {
        return this.props.setTab("task");
    }

    toStart() {
        return this.props.setTab("start");
    }


    render() {
        switch (this.props.tab){
            case 'meal' :
                return <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>Today's meal</h1>
                            <ListMeal />
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                    <div class="panel-heading">Товары</div>
                                <div className="panel-body">
                            </div>
                            </div>
                                <Button style={Styles.bigbutton} onClick={this.toTasks}>
                                    <h2 class="bigtext">Add meal</h2>
                                </Button>
                                <Button style={Styles.bigbutton} onClick={this.toStart}>
                                    <h2 class="bigtext">Log out</h2>
                                </Button>
                            </div>
                    </div>
                </div>
            case 'task':
                return <div>
                    <Tasks />
                    <div style = {{position: 'fixed', bottom: '10px'}}>
                        <Button btnStyle="primary" onClick={this.toTasks}>Add meal</Button>
                        <Button btnStyle="primary" onClick={this.toStart}>Log out</Button>
                        <Button btnStyle="primary" onClick={this.toMainPage}>Help</Button>
                        
                    </div>
                </div>;

            case 'start':
                this.toMainPage();
                return <div>
                    <Redirect to="/" />
                </div >;
            default:
                return null
        }
    }
}

function mapStateToProps(state) {
    return {
        tab: state.MealInfo.tab,
        user: state.MealInfo.user,
    }
}

export default connect(mapStateToProps)(TabsWindow);