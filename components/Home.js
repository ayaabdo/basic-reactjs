import React from "react";
//import PropTypes from 'prop-types'
import Header from "./Header";
import Footer from "./footer"

export default class Home extends React.Component{
  constructor(){
    super();
    this.state = {title: "Hi Friend"};
  }

  changeTitle(title){
    this.setState({title});
  }
   render(){
     return(
       <div>
         <Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title}/>
         <Footer />
       </div>
     );
   }
}
