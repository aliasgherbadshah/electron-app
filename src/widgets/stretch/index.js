import React, { Component } from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css';

class Stretch extends Component {
    state = {
        isVideo: false
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

                                <video className="video-container" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
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
                                            onClick={this._toogleViedo}
                                            className="button-primary"
                                        >   stretch </button>
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