import React, { Component } from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css'
import Todo from './template/todo';
class Rimender extends Component {
    state = {
        answerVisible: true
    }

    toggleAnswerVisible = () => {
        this.setState({
            answerVisible: !this.state.answerVisible
        })
    }

    render() {
        return (
            <Widgets.ModalWrapper>
                <div style={{width:"100%"}}>

                    {
                        this.state.answerVisible ?
                            <Todo />
                            :
                            <>
                                <div className="main-heading">Reminder</div>
                                <div className="mooddiary-margintop-40">
                                    <div className="sub-heading">Try to switch off tonight. Let me Remind you in the morning of your to do list.</div>
                                    <div className="margin-top-40 joke-answer-button">
                                        <button
                                            className="button-primary"
                                            onClick={this.toggleAnswerVisible}
                                        >
                                            Remind me
                                        </button>
                                    </div>
                                </div>      
                            </>
                    }

                </div>
            </Widgets.ModalWrapper>

        )
    }

}

export default Rimender;