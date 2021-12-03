import React, { Component, Fragment } from "react";
import { Button, CardImg, Col, Row } from "reactstrap";
import AppHeader from "../../Shared/AppHeader";
import PostService from "../Shared/PostService";


class DraftPost extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            id:"",
            doc:"", 
        }
    }

    componentDidMount(){
        this.GetAll();
    }

     GetAll = () => {
         PostService.List().then(res =>{
            this.setState({
                data:res.data
            })
         }
         )
     }

     Delete(ev,i){
        let data= this.state.data;
        const id = data[i].id;
        PostService.Delete(id).then(res =>{
            this.GetAll()
        })
     }

     render(){
        let {data, modal} = this.state;
        let arrP = Object.values(data).map(key => key);
        let item = arrP.map((c,i) => {
            if(c.type === "draft"){
            return(
            <Col style={{ marginLeft:"150px"}}>
                <Row className="Post">
                    <Col xs="3" className="img">
                    <CardImg style={{width:"100%",height:"170px", border:"1px solid black", marginTop:"30px"}}></CardImg>
                    </Col>
                    <Col xs="9" className="Content">
                        <Row className="Title" style={{marginTop:"20px", fontSize:"25px", color:"rgb(255, 179, 25)"}}>
                            <Col xs="9">{c.title}</Col>
                            <Col><Button onClick={(ev) => this.Delete(ev,i)}>DELETE</Button></Col>
                            {/* <Col><EditPost toggle1={(ev)=>this.toggle(ev, 0)} toogle={(ev) => this.toggle(ev,i)} modal={this.state.modal} PostOut = {this.PostOut()}
                             textfix = {(ev) => this.TEXTFIX(ev)} Edit = {this.Edit}/></Col> */}
                        </Row>
                        <Row className="Hastag" style={{}}>
                        <h6>{c.type}</h6>
                        </Row>
                        <Row className="DemoContent">
                        {c.content}
                        </Row>
                    </Col>
                </Row>  
            </Col>
            
        );
            }
        })

        return(
            <Fragment>
                <AppHeader/>
               <div>
                    {item}
                </div>
            </Fragment>  
        )
    }
}
export default DraftPost