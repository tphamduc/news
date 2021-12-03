import React, { Component, Fragment } from "react";
import { CardImg, Col, Row, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import './Post.css';
import EditPost from "./EditPost";
import UpPost from "./UpPost";

import PostService from "../Shared/PostService";

class ListPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            content:"",
            type:"",
            id:"",
            doc:"",
            user_id:""
        };
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

     toggle = (ev,i) => {
        let data = this.state.data; 
        this.setState({modal: !this.state.modal});
        this.state.id = data[i].id ;
        console.log(this.state.id)
        this.state.doc = data[i].content;
        this.setState({
            data
        });
        };

    PostOut = () => {
            let out = this.state.doc;
            return out;
    }

    TEXTFIX = (ev) =>{
        this.state.doc = ev.target.value;
    }

    Edit = () =>{
        const id = this.state.id;
        const data = {
            content: this.state.doc 
        }
        PostService.Edit(data, id).then(res => {
            console.log("thanh cong", res.data)
            this.GetAll()
        })
    }
    
    

    render(){
        let {data, modal} = this.state;
        let arrP = Object.values(data).map(key => key);
        let item = arrP.map((c,i) => {
            if(c.type === "new"){
            return(
            <Col style={{ marginLeft:"150px"}}>
                <Row className="Post">
                    <Col xs="3" className="img">
                    <CardImg style={{width:"100%",height:"170px", border:"1px solid black", marginTop:"30px"}}></CardImg>
                    </Col>
                    <Col xs="9" className="Content">
                        <Row className="Title" style={{marginTop:"20px", fontSize:"25px", color:"rgb(255, 179, 25)"}}>
                            <Col xs="9">{c.title}</Col>
                             <Col>
                             <UncontrolledDropdown inNavbar style={{marginTop:"-5px"}}>
                                <DropdownToggle nav>
                                    <span class="material-icons" style={{fontSize:"15px"}}>MORE</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    <span onClick={(ev) => this.Delete(ev,i)}>DELETE</span>
                                    </DropdownItem>
                                    <DropdownItem >
                                    <EditPost toggle1={(ev)=>this.toggle(ev, 0)} toogle={(ev) => this.toggle(ev,i)} modal={this.state.modal} PostOut = {this.PostOut()}
                                    textfix = {(ev) => this.TEXTFIX(ev)} Edit = {this.Edit} data = {this.state.data[i].created_by}/>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                             </Col>
                        </Row>
                        <Row className="type" style={{}}>
                        <h6>{c.type}</h6>
                        </Row>
                        <Row className="DemoContent" style={{marginLeft:"1px"}}> 
                        {c.content}
                        </Row>
                        <Row className="author" style={{marginLeft:"-8px", marginTop:"10px", fontSize:"12px"}}>
                        <span>Author: {c.created_by}</span>
                        </Row>
                    </Col>
                </Row>  
            </Col>
            
        );
            }
        })

        return(
            <Fragment>
                <Col style={{marginLeft:"150px"}}>
                <UpPost all={this.GetAll}/>
                </Col>
               <div>
                    {item}
                </div>
            </Fragment>
            
            
        )
    }
}
export default ListPost;

