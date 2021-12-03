import React, { Component, Fragment } from "react";
import { Button,  Col, Row } from "reactstrap";
import PostService from "../Shared/PostService";

class UpPost extends Component{
    constructor(props){
        super(props);
        this.state ={
            data:[],
            content:"",
            title:"",
            type:""
        };
    }

    changeText = (ev) =>{
        this.setState({
            content: ev.target.value
        })
    }

    TakeType = (ev) =>{
        this.setState({
            type:ev.target.value
        })
    }

    TakeTitle = (ev) =>{
        this.setState({
            title:ev.target.value
        })
    }

    test = () =>{
        const res = window.sessionStorage.getItem('user')
        console.log(res)
    }

        OnSubmit = () =>{
            const data ={
                title: this.state.title,
                content:this.state.content,
                type:this.state.type
            }
            PostService.post_content(data).then(res => {
                this.props.all();
                console.log("thanh cong", res.data)
            }    
        )
        }
    render(){
        return(
            <Fragment>
                    <Row className="title">
                        <input style={{width:"100%", marginTop:"10px"}} onChange={ev => this.TakeTitle(ev)} placeholder="Title"></input>
                    </Row>
                    <Row className="input">
                        <input style={{width:"100%", height:"70px", marginTop:"10px"}} onChange={ev => this.changeText(ev)} placeholder="Post"></input>
                    </Row>
                    <Row className="btnSubmit">
                        <Col>
                            <input style={{marginTop:"10px", width:"100%", marginLeft:"-11px"}} onChange={ev => this.TakeType(ev)} placeholder="Type"></input>
                        </Col>
                        <Col>
                            <Button color="success" style={{marginTop:"10px"}} onClick={this.OnSubmit}>Submit</Button>
                        </Col>   
                    </Row>
            </Fragment> 
        )
    }
}
export default UpPost