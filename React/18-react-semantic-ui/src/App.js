import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header } from 'semantic-ui-react'
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
        <Container text>
          <Navbar/> <hr/><hr/>
        <Header as='h2'>Header</Header>
       <LoginForm/>
        </Container>
      
    </div>
  );
};

export default App;