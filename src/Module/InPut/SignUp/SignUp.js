import react, { Component, Fragment } from "react";
import { Button, Row } from "reactstrap";
import './SignUp.css'
import InputService from "../Shared/InPutService";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "../SignIn/SignIn";

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            all:[],
            Fullname:"",
            Gender:"",
            UserName:"",
            PassWord:"",
            Role:"",
            Birthday:"",
            Email:"",
            Phone:"",
            Address:"",
            id:""
        }
    }

    TakeName = (ev) =>{
        this.setState({
            Fullname:ev.target.value
        })
    }

    TakeGender = (ev) =>{
        this.setState({
            Gender:ev.target.value
        })
    }

    TakeUserName = (ev) =>{
        this.setState({
            UserName:ev.target.value
        })
    }

    TakePassword = (ev) =>{
         this.setState({
             PassWord: ev.target.value
         })
    }

    TakeRole = (ev) =>{
        this.setState({
            Role:ev.target.value
        })
    }

    TakeBirthday = (ev) =>{
        this.setState({
            Birthday:ev.target.value
        })
    }

    TakeMail  = (ev) =>{
        this.setState({
            Email:ev.target.value
        })
    }
    
    TakePhone = (ev) =>{
         this.setState({
             Phone:ev.target.value
         })
    }

    TakeAdd = (ev) =>{
        this.setState({
            Address:ev.target.value
        })
    }

    Submit = () =>{
        const data ={
            user_name:this.state.Fullname,
            full_name:this.state.UserName,
            gender:this.state.Gender,
            birthday:this.state.Birthday,
            role:this.state.Role,
            email:this.state.Email,
            phone:this.state.Phone,
            address:this.state.Address
        }
        InputService.signUp(data).then(res => {
            this.setState({
                id:res.data.id
            })
            this.setpass()
            console.log("thanh cong",res.data)
        })
    }

    setpass = () =>{
        const data1 ={
            id:this.state.id,
            password:this.state.PassWord
        }
        InputService.setPass(data1).then(res =>{
            console.log(res.data)
        })
    }


    render(){
        return(
            <Fragment>
            <div className="Container">
                <Row className="In">
                    <h1>Đăng Ký</h1>

                    <p>Full Name:</p><input onChange={ev => this.TakeName(ev)}></input>

                    <p>Gender:</p><input onChange={ev => this.TakeGender(ev)}></input>

                    <p>User Name:</p><input onChange={ev => this.TakeUserName(ev)}></input>

                    <p>Password:</p><input onChange={ev => this.TakePassword(ev)}></input>

                    <p>Role:</p><input onChange={ev => this.TakeRole(ev)}></input>

                    <p>Birthday:</p><input onChange={ev => this.TakeBirthday(ev)}></input>

                    <p>Email:</p><input onChange={ev => this.TakeMail(ev)}></input>

                    <p>Phone:</p><input onChange={ev => this.TakePhone(ev)}></input>

                    <p>Address:</p><input onChange={ev => this.TakeAdd  (ev)}></input>

                    <Button color="success" onClick={this.Submit}>Đăng Ký</Button>
                    <p><Link to="/login">Đã có tài khoản ? Đăng nhập</Link></p>
                </Row>
                <Row>
               
                </Row>
            </div>
            
            </Fragment>
        )
    }
}
export default SignUp






