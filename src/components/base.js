import React, { Component } from 'react';
import {connect} from "react-redux"
class base extends Component {

  render() { 
    return (  
      <div class="form-group">
        {this.props.todo.map(el=><li onClick={()=>{this.props.remove(el.id)}}
         key={el.id}>
         {el.inputValue}
         </li>)}

      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    todo:state.main
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    remove:(id)=>{
      dispatch ({type:'REMOVE_INPUT',id:id})
    }

  }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (base);