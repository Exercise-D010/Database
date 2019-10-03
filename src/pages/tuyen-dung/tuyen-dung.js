import React from 'react';
import './tuyen-dung.scss';
import { Container, Row, Col } from 'react-bootstrap';


class TuyendungPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <h1 className="td">TUYỂN DỤNG</h1>
                 <Container>
                   <Row>
                     <Col>1s</Col>
                     <Col> 2s</Col>
                   </Row>
                 </Container>
            </React.Fragment>
        )
    }
}
    export default TuyendungPage