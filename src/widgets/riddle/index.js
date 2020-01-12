import React, { Component } from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css'
import Axios from "axios"
import constants from '../../constants';
class Riddle extends Component {
    state = {
        answerVisible: false,
        loading: true,
        riddle: "Loading...",
        answer: ""
    }


    componentDidMount() {
        const url = `${constants.BASE_URL}app/riddles`;
        Axios({
            url,
            method: 'get',
        }).then(response => {
            this.setState({
                riddle: response.data.data.riddle,
                answer: response.data.data.answer,
                loading: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false
            })
        })
    }

    toggleAnswerVisible = () => {
        this.setState({
            answerVisible: !this.state.answerVisible
        })
    }

    render() {
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Riddle</div>
                    <div className="mooddiary-margintop-40">
                        <div className="sub-heading">{this.state.riddle}</div>
                        <div className="margin-top-40 joke-answer-button">
                            {
                                !this.state.loading ?
                                    <button
                                        className="button-primary"
                                        onClick={this.toggleAnswerVisible}
                                    >
                                        answer
                                    </button> : null
                            }

                        </div>
                        {
                            this.state.answerVisible ?
                                <div className="margin-top-40 joke-answer">
                                 {this.state.answer}
                        </div>
                                :
                                null
                        }
                    </div>
                </div>
            </Widgets.ModalWrapper>

        )
    }

}

export default Riddle;