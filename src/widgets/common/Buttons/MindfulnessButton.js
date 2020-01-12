import React, {Component} from "react";
import '../../../styles/common/mindfulness.css';
import { withRouter } from "react-router";
const icon = require('../../../assets/mindfullness.svg')
class MindfulnessButton extends Component {

    render(){
        return (
            <div onClick={()=>{this.props.history.push('/mindfulness')}} className="mindfull-button">
                <img src={icon}/>
            </div>
        )
    }
}
export default withRouter(MindfulnessButton)