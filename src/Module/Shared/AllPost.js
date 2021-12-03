import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import ListPost from "../Post/ListPost";
import ProfileUSer from "../User/ProfileUser";
import AppHeader from "../../Shared/AppHeader";

class AllPost extends Component{
    render(){
        return(
            <Fragment>
                <AppHeader/>
                <Row className="Container" style={{width:"100%"}}>
                    <Col xs="7">
                    <ListPost/>
                    </Col>
                    <Col xs="5">
                    <ProfileUSer/>
                    </Col>
                    
                </Row>
            </Fragment>
        )
    }
}
export default AllPost;