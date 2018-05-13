import React, { Component } from "react";

class ContainerUsers extends Component {
     render(){
          return (
               <div class="content mt-3">
                    <div class="animated fadeIn">
                         <div class="row">
                           {this.props.children}
                         </div>
                    </div>
               </div>
          );
     }
}
export default ContainerUsers;