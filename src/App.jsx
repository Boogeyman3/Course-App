import React from 'react';
import styled from 'styled-components';
import Header from './assets/Header';
import Home from './assets/Home';
import Advantage from './assets/Advantage';
import Topcourse from './assets/Topcourse';
import data from './assets/DataElement';

const CourseContainer = styled.div`

`;

function App() {
 

  return (
    <>
      <Header />
      <Home />
      <Advantage />
      <Topcourse/>
    </>
  );
}

export default App;
