import React, { Component } from 'react';
import { CardGroup,Card,Col,Row } from 'react-bootstrap';
import axios from 'axios';

export class CardsLayout extends Component {
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
                <Row xs={1} md={3} className="g-4">
                {this.state.annonces.map((annonce) => (
                    <Col key = {annonce.id}>
                    <Card>
                        <Card.Img variant="top" 
                        src="/images/img-card1.jpg" 
                        width="160px"
                        height="366px" />
                        <Card.Body>
                        <Card.Title>{annonce.titre}</Card.Title>
                        <Card.Text>
                            {annonce.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        )
    }
}

export default CardsLayout
