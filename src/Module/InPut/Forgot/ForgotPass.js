import react, { Component, Fragment } from "react";
import { Button, Col, Row } from "reactstrap";
import './ForgotPass.css'
import InputService from "../Shared/InPutService";

class ForgotPass extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:"",
            newpass:"",
            err:""
        }
    }

    GetNewPass = (e) =>{
        this.setState({
            newpass:e.target.value
        })
    }

    GetID = (e) =>{
        this.setState({
            id:e.target.value
        })
    }

    OnSubmit = () =>{
        let id = this.state.id;
        let newpass = this.state.newpass;

        if(id === "" || newpass === ""){
            let err = "Ban can nhap day du";
            this.setState({
                err:err
            })
        }
        else{
            const data1 ={
                id : id,
                password: newpass
            }
            InputService.setPass(data1).then(res =>{
                console.log("thanh cong", res.data)
            })
        }
    }

    render(){
        return(
            <Fragment>
            <div className="container" >
                <Col className="img">
                    <img src="data:image/jpeg;base64,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"></img>
                </Col>
                <Col className="input">
                    <Row>
                    <h3>SET PASSWORD</h3>
                    </Row>
                    <Row>
                    <p style={{color:"red"}}>{this.state.err}</p>
                    </Row>
                    <Row>
                    <p>ID</p><input onChange={e => this.GetID(e)}></input>
                    </Row>
                    <Row>
                    <p>New Password:</p><input type="password" onChange={e => this.GetNewPass(e)}></input>
                    </Row>
                    <Button color="warning" onClick={this.OnSubmit}><b>Submit</b></Button>
                </Col>
            </div>
            </Fragment>
        )
    }
}
export default ForgotPass