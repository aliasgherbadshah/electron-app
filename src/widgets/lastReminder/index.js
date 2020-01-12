import React, { Component } from 'react';
import Widgets from '../index';
import '../../styles/common/misc.css';

class LastReminder extends Component {

    render() {
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Reminder</div>
                    <div className="mooddiary-margintop-40">
                        <div className="sub-heading">
                            {window.localStorage.getItem('last_reminder')}
                        </div>
                    </div>
                </div>
            </Widgets.ModalWrapper>

        )
    }

}

export default LastReminder;