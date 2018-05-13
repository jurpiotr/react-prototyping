import React, { Component } from "react";

class HeaderLeft extends Component {
     render(){
          return (
               <div class="col-sm-7">
               <div class="header-left">
                   <button class="search-trigger"><i class="fa fa-search"></i></button>
                   <div class="form-inline">
                       <form class="search-form">
                           <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                           <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                       </form>
                   </div>

                   <div class="dropdown for-notification">
                     <button class="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i class="fa fa-bell"></i>
                       <span class="count bg-danger">{this.props.countDanger}</span>
                     </button> 
                     <div class="dropdown-menu" aria-labelledby="notification">
                       <p class="red">You have 3 Notification</p>
                     </div>
                   </div>

                   <div class="dropdown for-message">
                     <button class="btn btn-secondary dropdown-toggle" type="button"
                           id="message"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <i class="ti-email"></i>
                       <span class="count bg-primary">{this.props.countEmails}</span>
                     </button>
                   </div>
               </div>
           </div>
          );
     }
}
export default HeaderLeft;