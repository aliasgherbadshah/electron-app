import React,{Component} from 'react';
import Widgets from '../../index';
import '../../../styles/common/misc.css';
import '../../../styles/widgets/joke.css';
import Axios from "axios"
import constants from '../../../constants';

class JokeMainView extends Component {
    state = {
        answerVisible: false,
        joke:"loading.."
    }

    componentDidMount () {
        const url = `${constants.BASE_URL}app/jokes`;
        Axios({
            url,
            method: 'get',
        })
        .then(response => {
           this.setState({
               joke:response.data.data.joke
           })
        })
        .catch(err => {
           console.log(err)
        })
    }

    toggleAnswerVisible = () => {
        this.setState({
            answerVisible: !this.state.answerVisible
        })
    }



    render(){
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Laugh</div>
                    <div className="mooddiary-margintop-40">
                    <div className="sub-heading">{this.state.joke}</div>
                    {/* <div className="margin-top-40 joke-answer-button">
                        <button 
                            className="button-primary" 
                            onClick={this.toggleAnswerVisible}
                        >
                            answer
                        </button>
                    </div> */}
                    {
                        this.state.answerVisible ?
                        <div className="margin-top-40 joke-answer">
                            Overmorrow is day after tommorow
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

export default JokeMainView;