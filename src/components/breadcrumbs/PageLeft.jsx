import React, { Component } from "react";

class PageLeft extends Component {
     render(){
          return (
            <div class="col-sm-4">
              <div class="page-header float-left">
                <div class="page-title">
                  <h1>{this.props.pageTitle}</h1>
                </div>
              </div>
            </div>
          );
     }
}
export default PageLeft;