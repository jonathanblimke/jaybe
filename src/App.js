import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

import Header from './components/header'


const App = () =>   {
   


    return (
  
      <div id="colorlib-page">
        <div id="container-wrap">
        <Header></Header>
         	<Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
          
          </div>
      	</div>
      </div>
      //{/* </Wrapper> */}
      
    )
  
}

export default App;
