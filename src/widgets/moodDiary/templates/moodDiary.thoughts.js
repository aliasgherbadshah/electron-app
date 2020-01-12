import React, { Component } from "react";
import moment from "moment";
import axios from 'axios';
import constants from '../../../constants';

class MoodDiaryThoughts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            thoughts: '',
            loading:false
        }
    }

    formatDate = (date) => {
        return moment(date).format("YYYY-MM-DD").toString();
    }

    onChangeHandler = (ev, type) => {
        const stateObj = { ...this.state };
        stateObj[type] = ev.target.value;
        if (type === "date") {
            stateObj[type] = moment(ev.target.value);
        }
        console.log(stateObj);
        this.setState({
            ...stateObj
        });
    }
    _submitDataHandler = () => {
        this.setState({
            loading:true
        })
        const url = `${constants.BASE_URL}app/user/mood-diary`;
        console.log(this.formatDate(this.state.date), this.state.thoughts);
        axios({
            url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                date: this.formatDate(this.state.date),
                content: this.state.thoughts,
            }
        }).then(response => {
            console.log('LOGIN ___', response);
            this.setState({
                loading:false,
                thoughts:''
            })
        }).catch(err => {
            console.log(err);
            alert("Unable to submit mood.")
            this.setState({
                loading:false
            })
        })
    }
    render() {
        return (
            <div className="mooddiary-thoughts-section">
                <input type="date"
                    value={this.formatDate(this.state.date)}
                    onChange={(ev) => this.onChangeHandler(ev, "date")}
                />
                <br />
                <textarea
                    rows="5"
                    cols="50"
                    value={this.state.thoughts}
                    onChange={(ev) => this.onChangeHandler(ev, "thoughts")}
                />
                <br />
                <button
                    onClick={this._submitDataHandler}
                    disabled={this.state.loading}
                    className="button-primary mooddiary-keep-button">
                    {this.state.loading?"Submiting...":"Keep"}
                </button>
            </div>
        )
    }
}

export default MoodDiaryThoughts;