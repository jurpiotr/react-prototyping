import React, { Component } from "react";

class PageRight extends Component {
     render(){
         return (
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li><a href="#">{this.props.dashboard}</a></li>
                            <li><a class="active" href="#">{this.props.pageTitle}</a></li>
                        </ol>
                    </div>
                </div>
            </div>
         );
     }
}
export default PageRight;