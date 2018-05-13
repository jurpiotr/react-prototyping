import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import HeaderLeft from "./components/header/HeaderLeft.jsx";
import HeaderRight from './components/header/HeaderRight.jsx';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs.jsx';
import PageLeft from "./components/breadcrumbs/PageLeft.jsx";
import PageRight from './components/breadcrumbs/PageRight.jsx';
import ContainerUsers from './components/containerUsers/ContainerUsers.jsx';
import Form from './components/containerUsers/form/Form.jsx';
import CardOfUsers from './components/containerUsers/CardOfUsers/CardOfUsers.jsx';


class App extends Component {
  render() {
    return (
      <div>
            <Header>
                <HeaderLeft countDanger="5" countEmails="9" />
                <HeaderRight user="Username" />
            </Header>

            <Breadcrumbs>
                <PageLeft pageTitle="Users" />
                <PageRight dashboard="Dashboard" pageTitle="Users" />
            </Breadcrumbs>

            <ContainerUsers>
                <Form />
                <CardOfUsers />
            </ContainerUsers>
        </div>
    );
  }
}

export default App;
