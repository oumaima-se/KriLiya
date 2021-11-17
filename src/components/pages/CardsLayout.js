import React, { Component } from 'react';
import { CardGroup,Card } from 'react-bootstrap';

export class CardsLayout extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img 
                        variant="top" 
                        src="/images/img-card1.jpg" 
                        width="160px"
                        height="366px"
                        />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img 
                            variant="top" 
                            src="/images/img-card2.jpg" 
                            width="160px"
                            height="366px"
                        />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img 
                            variant="top" 
                            src="/images/img-card3.jpg" 
                            width="160px"
                            height="366px"
                        />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    
                </CardGroup>

                <CardGroup>
                    <Card>
                        <Card.Img 
                        variant="top" 
                        src="/images/img-card1.jpg" 
                        width="160px"
                        height="366px"
                        />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img 
                            variant="top" 
                            src="/images/img-card2.jpg" 
                            width="160px"
                            height="366px"
                        />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img 
                            variant="top" 
                            src="/images/img-card3.jpg" 
                            width="160px"
                            height="366px"
                        />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    
                </CardGroup>
            </div>
        )
    }
}

export default CardsLayout
