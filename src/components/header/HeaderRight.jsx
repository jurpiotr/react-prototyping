import React, { Component } from "react";

class HeaderRight extends Component {
     render(){
         return (
         <div class="col-sm-5">
            <div class="user-area float-right"> 
                <img class="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
            </div>
            <div class="user-area float-right" style={{padding: "10px"}} > 
                {this.props.user}
            </div>
        </div>
         );
     }
}
export default HeaderRight;