import React,{Component} from 'react';
import Widgets from '../../index';
import '../../../styles/common/misc.css';
import '../../../styles/widgets/fact.css';
import Axios from "axios"
import constants from '../../../constants';

class MoodDiaryMainView extends Component {
    state = {
        empower:"Loading..."
    }
    componentDidMount () {
        const url = `${constants.BASE_URL}app/empower`;
        Axios({
            url,
            method: 'get',
        })
        .then(response => {
           this.setState({
            empower:response.data.data.empower
           })
        })
        .catch(err => {
           console.log(err)
        })
    }
    render(){
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Empower</div>
                    <div className="mooddiary-margintop-40">
                    <div className="sub-heading">{this.state.empower}</div>
                   
                    </div>
                </div>
            </Widgets.ModalWrapper>
                
        )
    }
    
}

export default MoodDiaryMainView;