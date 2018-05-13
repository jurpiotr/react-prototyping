import React, { Component } from "react";
import Card from './Card.jsx';
import GroupForm from './GroupForm.jsx';

class Form extends Component {
     render(){ 
         return (
               <div class="col-lg-6">
                    <div class="card">
                         <div class="card-header"><strong>User</strong><small> Form</small></div>
                         <div class="card-body card-block">
                            <Card value="Name" id="company" placeholder="Enter your company name" />
                            <Card value="VAT" id="vat" placeholder="DE1234567890" />
                            <Card value="Street" id="street" placeholder="Enter street name" />
                            <GroupForm />
                            <Card value="Country" id="country" placeholder="Country name" />
                         </div>
                    </div>
               </div>
         );
     }
}
export default Form;