import React, { Component } from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css';
import constants from '../../constants';
import Axios from "axios"

class Stretch extends Component {
    state = {
        isVideo: false,
        video_link:null,
        loading:true
    }
    componentDidMount() {
     const url = `${constants.BASE_URL}app/strecth/vedio`;
        Axios({
            url,
            method: 'get',
        }).then(response => {
            this.setState({
                video_link: response.data.data.video_link,      
                loading: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false
            })
        })   
    }

    

    _toogleViedo = () => {
        this.setState({
            isVideo: !this.state.isVideo
        })
    }
    render() {
        return (
            <Widgets.ModalWrapper>
                <div>
                    {
                        this.state.isVideo ?
                            <>
                                <div className="main-heading">Video</div>

                                
                                <video className="video-container"  src={this.state.video_link} controls autoplay>
                                 
//                                  <source src={this.state.video_link} type="video/ogg"/>
                                  App does not support the video tag.
                                </video>
                                <div className="aling-button-middle">
                                <button
                                    onClick={this._toogleViedo}
                                    className="button-primary"
                                >   close </button>
                                </div>

                            </> :
                            <>
                                <div className="main-heading">Stretch</div>
                                <div className="mooddiary-margintop-40">
                                    <div className="sub-heading">
                                        Lets loosen up and do a quick Stretch at your desk.
                                    </div>

                                    <div className="aling-button-middle">
                                        <button
                                            disabled={this.state.loading}
                                            onClick={this._toogleViedo}
                                            className="button-primary"
                                        >   {this.state.loading?"Loading...":"stretch"} </button>
                                    </div>
                                </div>
                            </>
                    }


                </div>
            </Widgets.ModalWrapper>

        )
    }

}

export default Stretch;