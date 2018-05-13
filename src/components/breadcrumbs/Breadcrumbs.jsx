import React, { Component } from "react";

class Breadcrumbs extends Component {
     render(){
          return (
            <div class="breadcrumbs">
                 {this.props.children}
            </div>
          );
     }
}
export default Breadcrumbs;