import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class EditPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
    }
    render(){
        const data = this.props.data;
        return(
            <Fragment>      
               <span onClick={this.props.toogle}>EDIT</span>
            
                {console.log(data.created_by)}
              <Modal isOpen={this.props.modal}  toggle={this.props.toggle1}>
              <ModalHeader  toggle={this.props.toggle1}>Modal title</ModalHeader>
              <ModalBody>
                <input type="textarea" className="inputPost" defaultValue={this.props.PostOut} onChange={this.props.textfix}></input>
              </ModalBody>
              <ModalFooter>
              <Button color="primary" onClick={this.props.Edit} >Update</Button>
              </ModalFooter>
          </Modal>
            </Fragment>
        )
    }

}
export default EditPost;