import react, { Component } from "react";
import { Button } from "reactstrap";

class Delete extends Component{

    out = () =>{
        console.log(this.props.data)
    }
    render(){
        return(
            <Button onClick={this.out}>Delete</Button>
        )
    }
}
export default Delete