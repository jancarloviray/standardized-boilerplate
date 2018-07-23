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
  position: absolute;
  z-index: 1000;
  height: 70px;
  color: white;
  padding: 20px;
  width: 100%;
`

const AppSidebar = styled.div`
  width: 300px;
  height: 100vh;
  position: absolute;
  background: white;
  z-index: 1;
  left: 0;
  top: 0;
`

const AppContent = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-left: 300px;
  background: #E9ECEF;
  padding-top: 70px;
`

const SectionHeader = styled.div`
  padding: 25px;
  text-align: right;
`;

const App = () => (
  <Router>
    <AppWrapper>
      <AppHeader>
        <h1 className="App-title">Welcome to React</h1>
      </AppHeader>
      <AppSidebar>
      </AppSidebar>
      <AppContent>
        <SectionHeader>
          <Button className="ml-3" color="primary" size="lg" onClick={() => { }}>Action 1</Button>
          <Button className="ml-3" color="primary" size="lg" onClick={() => { }}>Action 2</Button>
          <Button className="ml-3" color="primary" size="lg" onClick={() => { }}>Action 3</Button>
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
        <hr />
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
