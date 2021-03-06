import React, { Component } from 'react';
import {connect} from 'react-redux'
class Input extends Component {

  render() { 
    return (  
      <div>
        <input type="text" className="display-6" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <br></br>        <br></br>

        <button className="btn btn-primary mb-2" onClick={()=>{this.props.add(this.props.input)}}>  Add</button>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
  hundelChange:(target)=>{
    dispatch ({type:'SET_INPUT',value:target.value})
  },
  add:(input)=>{
    let obj={}
    let inputValue=input
    let id=Math.random()
    obj={inputValue,id}
    dispatch ({type:'ADD_INPUT',value:obj})
  }
}
}
const mapStateToProps=(state)=>{
  return{
    input:state.input
  }
}

 
export default connect(mapStateToProps,mapDispatchToProps) (Input);