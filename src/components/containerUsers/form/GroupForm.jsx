import React, { Component } from "react";

class GroupForm extends Component {
     render(){
         return (
          <div class="row form-group">
               <div class="col-8">
                    <div class="form-group"><label for="city" class=" form-control-label">City</label><input type="text" id="city" placeholder="Enter your city" class="form-control" /></div>
               </div>
               <div class="col-8">
                    <div class="form-group"><label for="postal-code" class=" form-control-label">Postal Code</label><input type="text" id="postal-code" placeholder="Postal Code" class="form-control" /></div>
               </div>
          </div>
         );
     }
}
export default GroupForm;
