import React, { Component } from 'react'
//import AnnonceService from '../services/AnnonceService';
import axios from 'axios';

class ListAnnonceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            annonces: []
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/krilya/annonce").then((res) => {
            this.setState({ annonces: res.data });
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Annonce List</h2>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nombres de Chambres</th>
                                <th>Description</th>
                                <th>Surface</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.annonces.map((annonce) => 
                                <tr key = {annonce.id}>
                                        <td> {annonce.chambres} </td>
                                        <td> {annonce.description} </td>
                                        <td> {annonce.surface} </td>
                                    </tr>
                                )
                            }
                        </tbody>

                        </table>
                    </div>
            </div>
        )
    }
}

export default ListAnnonceComponent;

