import React, { Component } from 'react';
import Widgets from '../../index';
import '../../../styles/common/misc.css';
import '../../../styles/widgets/fact.css';
import Axios from "axios"
import constants from '../../../constants';

class MoodDiaryMainView extends Component {
    state = {
        fact:"Loading..."
    }
    componentDidMount () {
        const url = `${constants.BASE_URL}app/facts`;
        Axios({
            url,
            method: 'get',
        })
        .then(response => {
           this.setState({
            fact:response.data.data.fact
           })
        })
        .catch(err => {
           console.log(err)
        })
    }
    render() {
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Fact</div>
                    <div className="mooddiary-margintop-40">
                        <div className="sub-heading">Did you know ?</div>
                        <div className="fact-margintop-40">
                           {this.state.fact}
                    </div>
                    </div>
                </div>
            </Widgets.ModalWrapper>

        )
    }

}

export default MoodDiaryMainView;