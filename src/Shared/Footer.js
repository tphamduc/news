import React, {Component, Fragment} from "react"
import { Col, Row } from 'reactstrap';

class Footer extends Component{
    render(){
        return(
            <Fragment>
                <div className="container">
                <Row className="footer" style={{width:"100%", border:"1px solid black", marginTop:"10px", height:"100px"}}>
                    <Col xs="4" className="col1">
                        
                    </Col>
                    <Col xs="5" className="col2">
                        
                    </Col>
                    <Col xs="3" className="col3">
                        
                    </Col>
                </Row>
                </div>
            </Fragment>
        )
    }
}
export default Footer;