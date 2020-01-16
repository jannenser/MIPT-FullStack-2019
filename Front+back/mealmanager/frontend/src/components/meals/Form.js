import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMeal } from '../../actions/meals'

export class Form extends Component {
    state = {
        name: "",
        value: "",
    };

    static propTypes = {
        addMeal: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]:
    e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, value } = this.state;
        const meal = { name, value }
        this.props.addMeal(meal)
    };

    render() {
        const { name, value } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Meal</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Value</label>
                    <textarea
                    className="form-control"
                    type="number"
                    name="value"
                    onChange={this.onChange}
                    value={value}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addMeal })(Form)
