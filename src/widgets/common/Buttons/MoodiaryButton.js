import React, {Component} from "react";
import { withRouter } from "react-router";
import '../../../styles/common/button.css';
import { Link } from 'react-router-dom';
const icon = require('../../../assets/mooddiary.svg')

class MooddiaryButton extends Component {

    render(){
        return (
            <div  onClick={()=>{this.props.history.push('/mooddiary')}}  className='mooddiaryButton'>
                <img src={icon}/>
            </div>
        )
    }
}
export default withRouter(MooddiaryButton)