import React, { Component } from 'react';
import '../../../styles/common/misc.css';
import constants from '../../../constants';
import Axios from "axios"
let interval

class StartPuzzel extends Component {
    state = {
        timer: "2:00",
        loading:true,
        answer:null,
        result:null,
        isTimesUp: false
    }
    componentDidMount() {
        clearInterval(interval);
        interval = setInterval(() => {
            var timer = this.state.timer;
            timer = timer.split(':');
            var minutes = timer[0];
            var seconds = timer[1];
            seconds -= 1;
            if (minutes < 0) return;
            else if (seconds < 0 && minutes != 0) {
                minutes -= 1;
                seconds = 59;
            }
            else if (seconds < 10 && seconds.length != 2) seconds = '0' + seconds;
            this.setState({
                timer: minutes + ':' + seconds
            })


            if (minutes == 0 && seconds == 0) {
               
                this.submitAnswer()
               
            };
        }, 1000);
    }
    submitAnswer = () =>{
        console.log(this.state.answer.split(" "))
        this.setState({
            isTimesUp: true,
        })
        clearInterval(interval)
        const url = `${constants.BASE_URL}app/puzzle/answers/${this.props.id}`;
        Axios({
            url,
            method: 'post',
            data:{
                	"words":this.state.answer.split(" ")
            }
        }).then(response => {
            this.setState({
                result: response.data.data.true_answers,
                
                loading: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false
            })
        })   
    }
    render() {
        return (

            <div style={{ textAlign: "center" }}>

                <div className="sub-heading">{this.state.timer}</div>

                <textarea
                    rows="5"
                    cols="50"
                    type="text"
                    placeholder="Start typing your words here."
                    style={{ marginTop: "20%", marginBottom: "10%" }}
                    onChange={(e)=>{this.setState({
                        answer:e.target.value
                    })}}
                />

                <div className="sub-heading">
                    {
                        this.state.isTimesUp ? this.state.loading?"Submiting Answer...":"YOU SCORED "+this.state.result : null
                    }</div>
                <button
                    className="button-primary"
                    style={{ paddingRight: "15px", paddingLeft: "15px", marginTop: "20px" }}
                    onClick={this.submitAnswer}
                >
                    Submit
                </button>

            </div>


        )
    }

}

export default StartPuzzel;