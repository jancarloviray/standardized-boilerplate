import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components'
import { Alert, Button } from 'reactstrap';
import Card from '@material/react-card';
import logo from './logo.svg';
import './App.css';

const AppWrapper = styled.div`
  text-align: center;
`

const App = () => (
  <Router>
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div>
        <Alert color="primary">This is a primary alert from Reactstrap and <Button color="primary">Bootstrap</Button></Alert>
        <Card>
          <h1>Title</h1>
          <p>Content</p>
        </Card>
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
