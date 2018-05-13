import React, { Component } from "react";
import HeaderLeft from "./HeaderLeft.jsx";
class Header extends Component {
     render(){
          return (
          <header id="header" class="header">
               <div class="header-menu">
                 {this.props.children}
               </div>
          </header>
          );
     }
}
export default Header;