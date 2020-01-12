import React, { Component } from 'react';
import '../../../styles/common/misc.css';
let interval
class StartPuzzel extends Component {
    state = {
        timer: "2:00",
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
                this.setState({
                    isTimesUp: true
                })
                clearInterval(interval)
            };
        }, 1000);
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
                />

                <div className="sub-heading">
                    {
                        this.state.isTimesUp ? "YOU SCORED 29" : null
                    }</div>
                <button
                    className="button-primary"
                    style={{ paddingRight: "15px", paddingLeft: "15px", marginTop: "20px" }}
                >
                    Submit
                </button>

            </div>


        )
    }

}

export default StartPuzzel;