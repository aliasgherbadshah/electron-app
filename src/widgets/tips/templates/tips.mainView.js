import React, { Component } from 'react';
import Widgets from '../../index';
import '../../../styles/common/misc.css';
import '../../../styles/widgets/fact.css';
import Axios from "axios"
import constants from '../../../constants';

class TipsMainView extends Component {
    state = {
        tip: "Loading..."
    }
    componentDidMount() {
        const url = `${constants.BASE_URL}app/tips`;
        Axios({
            url,
            method: 'get',
        })
            .then(response => {
                this.setState({
                    tip: response.data.data.tip
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
                    <div className="main-heading">Tips</div>
                    <div className="mooddiary-margintop-40">
                        <div className="sub-heading">
                            {this.state.tip}
                        </div>
                    </div>
                </div>
            </Widgets.ModalWrapper>

        )
    }

}

export default TipsMainView;