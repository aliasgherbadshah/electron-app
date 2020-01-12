import React, { Component } from 'react';
import '../../../styles/common/misc.css';

class PuzzelQuestion extends Component {

    render() {
        return (
         
                <div style={{ textAlign: "center" }}>


                    <div className="main-heading">Puzzel</div>
                    <div className="mooddiary-margintop-40">
                        <div className="sub-heading">
                            How many words you can find above.?<br />
                            There are no more than 34 and one that one that contains all of the letters.
                        </div>


                    </div>

                    <button
                        className="button-primary"
                        style={{ paddingRight: "15px", paddingLeft: "15px", marginTop: "20px" }}
                        onClick={this.props.startPuzzle}
                    >
                        Start
                    </button>

                </div>
           
        )
    }

}

export default PuzzelQuestion;