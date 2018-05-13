import React, { Component } from "react";

class Card extends Component {
     render(){
         return (
          <div class="form-group">
               <label for={this.props.id} class=" form-control-label">{this.props.value}</label>
               <input type="text" id={this.props.id} placeholder={this.props.placeholder} 
               class="form-control" />
          </div>
         );
     }
}
export default Card;
