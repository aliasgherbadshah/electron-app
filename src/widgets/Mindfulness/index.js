import React, { Component } from "react";
import '../../styles/common/mindfulness.css';
import Widgets from '../index';
import { Link } from 'react-router-dom';
import Axios from "axios"
import constants from '../../constants';

class Mindfulness extends Component {
    state = {
        categories: [],
        isLoading:true
    }
    componentDidMount() {
        const url = `${constants.BASE_URL}app/mindFull/categories`;
        Axios({
            url,
            method: 'get',
        }).then(response => {
            console.log(response.data.data)
            this.setState({
                categories: response.data.data,
                isLoading:false
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Widgets.ModalWrapper>
                <div>
                    <div className="main-heading">Mindful</div>

                    <div className="sub-heading" style={{ marginTop: "15%" }}>
                        Click on the menu below an pick a category for some mindfulness
                    </div>

                    <div className="dropdown">
                        <button disabled={this.state.isLoading} className="dropbtn">{this.state.isLoading?"Loading...":"Select Categorie"}</button>
                        <div className="dropdown-content">

                            {
                                this.state.categories.map(obj => {
                                    return <Link to={"/mindfulness/detail?id=" + obj._id}>{obj.category}</Link>
                                })
                            }



                        </div>
                    </div>

                </div>
            </Widgets.ModalWrapper>
        )
    }

}
export default Mindfulness