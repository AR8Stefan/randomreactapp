import React from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results'

import {
  Container,
  Jumbotron
} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Test App</h1>
          <p>This is just an app</p>

          <SearchForm />
        </Container>
      </Jumbotron>
      <Results />
    </div>
  );
}

export default App;
