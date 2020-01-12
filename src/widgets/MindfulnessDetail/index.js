import React, { Component } from "react";
import '../../styles/common/mindfulness.css';
import Widgets from '../index';
import Axios from "axios"
import constants from '../../constants';

class MindfulnessDetail extends Component {
    state = {
        isLoading: true,
        detail: null
    }
    componentDidMount() {
        console.log("+++++", this.props.history)
        const url = `${constants.BASE_URL}app/mindFull/categories/details/${this.getQueryStringValue('id')}`;
        Axios({
            url,
            method: 'get',
        }).then(response => {
           
            this.setState({
                detail: response.data.data,
                isLoading: false
            })
        }).catch(err => {
            console.log(err)
        })
    }
    getQueryStringValue = (key) => {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }
    render() {
        return (
            <Widgets.ModalWrapper>
                <div>
                    {
                        !this.state.detail ? "Loading..." :
                            <>
                                <div className="main-heading">Confident</div>
                                <ol style={{ marginTop: "30px" }}>
                                    {
                                        this.state.detail.details.map(obj => {
                                            return <li>{obj}</li>
                                        })
                                    }

                                </ol>

                                <div className="sub-heading" style={{ marginTop: "15%" }}>
                                    Try this:
                                 </div>
                                <p style={{ padding: "5px" }}>{this.state.detail.try_this}</p>
                            </>
                    }

                </div>
            </Widgets.ModalWrapper>
        )
    }
}
export default MindfulnessDetail