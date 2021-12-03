import React, { Component, Fragment } from "react";
import { CardImg, Col, Row, Button } from "reactstrap";
import AppHeader from "../../Shared/AppHeader";
import { Link } from "react-router-dom";

class ProfileUSer extends Component{
    render(){
        const token = JSON.parse(window.sessionStorage.getItem('user'))
        return(
            <Fragment>
            <Col style={{height:"500px", width:"350px", border:"1px solid black", marginLeft:"100px", borderRadius:"15px", marginTop:"10px"}}>
                <Row>
                    <Col className="Ava">
                        <CardImg style={{width:"80%",height:"100px", border:"1px solid black", borderRadius:"15px", marginLeft:"5px", marginTop:"5px"}}></CardImg>
                    </Col>
                    <Col className="Detail">
                        <Row style={{fontSize:"14px"}}>UserId:{token.user_id}</Row>
                        <Row></Row>
                        <hr style={{width:"100%", color:"rgb(240,165,43)"}}></hr>
                        <Row>
                            <Col><Button color="primary" size="sm" style={{width:"60px"}}>MORE</Button></Col>
                            <Col><Button color="success" size="sm" style={{width:"60px", textDecoration:"none"}}><Link to="/draft">DRAFT</Link></Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Row style ={{marginTop:"10px",color:"rgb(177, 230, 147)", textAlign:"center"}}>
                        <h2>HISTORY POST</h2>
                    </Row>
                </Row>
            </Col>
            </Fragment>
        )
    }
}
export default ProfileUSer;