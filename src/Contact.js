import React from 'react';



function Contact(props) {

  // let deleteHandler = () => {
  //   this.props.deleteHandler(this.props.Id)
  // }


    return (
  <tr>
    <td><img src= {props.pictureUrl} width="130px"/></td>
    <td>{props.name}</td>
    <td>{props.popularity}</td>
    <td><button>Delete this entry</button></td>
  </tr> 
   
 );
}

export default Contact;