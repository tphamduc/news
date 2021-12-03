import react, {  Fragment,useState } from "react";
import { Button, Col, Row} from "reactstrap";
import InputService from "../Shared/InPutService";
import { Link, useNavigate  } from "react-router-dom";
import './SignIn.css'




function SignIn(){
    const [UserName, Username] = useState('');
    const [PassWord, sPassWord] = useState('');
    const [err, serr] = useState('Incorrect UserName or PassWord');
    const [UserID, sUserID ] = useState('');
    
    const navigate = useNavigate();

    const TakeUser = (ev) =>{
        Username(ev.target.value);
    }

    const TakePass = (e) =>{
        sPassWord(e.target.value);
        
    }
    const alertName = () => {
        alert(err);
      };

    const Submit = () => {
        const data = {
            username: UserName,
            password: PassWord
        }
        if (UserName === "" || PassWord === "") {
            alertName();
        }
        else{
         try{
            window.sessionStorage.setItem('user',JSON.stringify(data));
            InputService.login(data).then(res => {
            console.log("thanh cong", res.data)
            window.sessionStorage.setItem('user',JSON.stringify(res.data));
             navigate("/main");
        })  
         }catch(error){
            alert(err);
            console.log(error)
         }
        }  
    }

        return(
            <Fragment>
            <div className="Container">
                <Col className="background">
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/58CIvG6Whv49bsmRbqaEZ6/e42a73d8ddef6f9c126fa49d384be678/6.jpg?fit=fill&w=480&h=270"></img>
                </Col>
                <Col className="Input">
                    <Row className="Topic">
                        <h1>WEB APP</h1>
                        <p>User Name:</p><input onChange={TakeUser} placeholder="User Name"></input>
                        <p>Password:</p><input type="password" onChange={TakePass} placeholder="Password"></input>
                        <Button color="success" onClick={Submit}><b>ĐĂNG NHẬP</b></Button>
                    </Row>
                    <Row className="More">
                        <Col><Link to="/signup">Đăng Ký</Link></Col>
                    </Row>
                </Col>
            </div>
            </Fragment>
        )
    
}
export default SignIn