import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components'
import { Alert, Button } from 'reactstrap';
import { Button as MdcButton } from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
import Card, { CardPrimaryContent, CardActions, CardActionButtons, CardActionIcons } from '@material/react-card';
import './App.css';

const AppWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
`

const AppHeader = styled.div`
  background-color: #2B6BA1;
  background-image: url('/images/texture-brandadmin@2x.png');
  background-size: cover;
  background-origin: border-box;
  position: absolute;
  z-index: 1000;
  height: 70px;
  color: white;
  padding: 20px;
  width: 100%;
  text-align: left;
`

const AppContent = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-left: 270px;
  background-color: #E9ECEF;
  background-image: url('/images/texture-main.png');
  background-blend-mode: overlay;
  background-size: contain;
  background-origin: border-box;
  padding-top: 70px;
`

const AppSidebar = styled.div`
  width: 270px;
  height: 100vh;
  position: absolute;
  background: white;
  z-index: 1;
  left: 0;
  top: 0;
  box-shadow: 1px 10px 2px #CCC;
  padding-top: 90px;
`

const SidebarLogo = styled.div`
  background: #f1f1f1;
  height: 110px;
  width: 85%;
  margin: auto;
`
const SidebarTitle = styled.div`
  text-align: left;
  text-indent: 20px;
  margin: 20px 0 90px 0;
`
const SidebarMenu = styled.div`
  text-align: left;
  margin: 0 0 0 15px;
`
const SidebarMenuItem = styled.div`
  img {
    margin: 0 15px;
    height: 25px;
  }
  a { 
    color: black;
    font-size: 0.9rem;
    font-weight: 400;
  }
`

const HeaderIconContainer = styled.div`
  width: 15px;
  margin: 0 10px 0 0;
  margin-top: -5px;
  display: inline-block;
  img { width: 100%; }
`

const SectionHeader = styled.div`
  padding: 25px;
  text-align: right;
`;

const LogoContainer = styled.div`
  display: inline-block;
  height: 25px;
  img { height: 100%;}
`

const Breadcrumb = styled.div`
  float: left;
`

const App = () => (
  <Router>
    <AppWrapper>
      <AppHeader>
        <h1 className="App-title">
          <LogoContainer>
            <img src="/icons/icon-wrap1-white.svg" />
          </LogoContainer>
        </h1>
      </AppHeader>
      <AppSidebar>
        <SidebarLogo></SidebarLogo>
        <SidebarTitle>
          <h2 className="h5">Apps</h2>
        </SidebarTitle>
        <SidebarMenu>
          <SidebarMenuItem>
            <img src="/icons/icon-mobiledevice-blueblack.svg" />
            <a href="#">Apps</a>
          </SidebarMenuItem>
        </SidebarMenu>
      </AppSidebar>
      <AppContent>
        <SectionHeader>
          <Breadcrumb>
            <h3 className="h4">Apps</h3>
          </Breadcrumb>
          <Button className="ml-3" color="primary" size="lg" onClick={() => { }}>
            <HeaderIconContainer><img src="/icons/icon-file-upload-white.svg" /></HeaderIconContainer>
            Upload
          </Button>
          <Button className="ml-3" color="primary" size="lg" onClick={() => { }}>
            <HeaderIconContainer><img src="/icons/icon-wrap1-white.svg" /></HeaderIconContainer>
            Action
          </Button>
          <Button className="ml-3" color="primary" size="lg" onClick={() => { }}>
            <HeaderIconContainer><img src="/icons/icon-wrap1-white.svg" /></HeaderIconContainer>
            Action
          </Button>
          <Button className="ml-3" color="primary" size="lg" onClick={() => { }}>
            <HeaderIconContainer><img src="/icons/icon-file-download-white.svg" /></HeaderIconContainer>
            Download
          </Button>
        </SectionHeader>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Card>
                <CardPrimaryContent>
                  <p>Content</p>
                </CardPrimaryContent>
                <CardActions>
                  <CardActionButtons>
                    <Button size="md" color="primary" onClick={() => { }}>Action 1</Button>
                    <Button size="md" color="primary" onClick={() => { }}>Action 2</Button>
                    <Button size="md" color="primary" onClick={() => { }}>Action 2</Button>
                  </CardActionButtons>
                  <CardActionIcons></CardActionIcons>
                </CardActions>
              </Card>
            </div>
            <div className="col">
              <Card>
                <CardPrimaryContent>
                  <h1>Header</h1>
                  <MdcButton>
                    <MaterialIcon icon="more_vert" />
                  </MdcButton>
                </CardPrimaryContent>
                <CardActions>
                  <CardActionButtons>
                    <Button size="lg" color="primary" onClick={() => { }}>Action 1</Button>
                  </CardActionButtons>
                  <CardActionIcons>
                    <i>Click Me Too!</i>
                  </CardActionIcons>
                </CardActions>
              </Card>
            </div>
            <div className="col">
            </div>
            <div className="col">
            </div>
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </AppContent>
    </AppWrapper>
  </Router>
);

const Home = inject(['store'])(
  observer(({ store }) => (
    <div>
      <h2>Home</h2>
      <p>{store.text}</p>
    </div>
  ))
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
