import React, {Component, Fragment} from "react"
import {Col, Row} from 'reactstrap';
import { Link } from "react-router-dom";

class AppHeader extends Component{
    render(){
        return(
            <Fragment>
                <div className="Container">
                    <Row style={{backgroundColor:"rgb(240,165,43)", width:"100%", height:"100px"}}>
                        <Col xs="3" className="Logo">
                        </Col>
                        <Col xs="6" style={{ marginLeft:"255px"}} className="Function">
                            <Row>
                                <Col xs="3" style={{marginLeft:"50px", marginTop:"40px"}}><p style={{color:"white"}}><Link to="/">Home</Link></p></Col>
                                <Col xs="3" style={{marginLeft:"50px", marginTop:"40px"}}><p style={{color:"white"}}><Link to="/user">User Profile</Link></p></Col>
                                <Col xs="3" style={{marginLeft:"50px", marginTop:"40px"}}><p style={{color:"white"}}><Link to="/profile">List User</Link></p></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}
export default AppHeader;