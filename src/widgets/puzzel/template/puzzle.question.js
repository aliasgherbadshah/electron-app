import React, { Component } from 'react';
import '../../../styles/common/misc.css';
import constants from '../../../constants';
import Axios from "axios"

class PuzzelQuestion extends Component {
     state = {
        data:null,
        loading:true
    }
  componentDidMount() {
     const url = `${constants.BASE_URL}app/puzzle`;
        Axios({
            url,
            method: 'get',
        }).then(response => {
            this.setState({
                data: response.data.data,      
                loading: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false
            })
        })   
    }
    render() {
        return (
         
                <div style={{ textAlign: "center" }}>


                    <div className="main-heading">Puzzel</div>
                    {
                        this.state.loading?"Loading":
                        <>
                            <img src={this.state.data.wordwheel_image} style={{width:"30%", marginTop:"20px", marginBottom:"20px"}} />

                            <div>
                                <div className="sub-heading">
                                   {this.state.data.question}
                                </div>


                            </div>

                            <button
                                className="button-primary"
                                style={{ paddingRight: "15px", paddingLeft: "15px", marginTop: "20px" }}
                                onClick={()=>{this.props.startPuzzle(this.state.data._id)}}
                            >
                                Start
                            </button>
        
                        </>
                    }
                    
                </div>
           
        )
    }

}

export default PuzzelQuestion;