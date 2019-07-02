import React, { Component, Suspense } from 'react';


// routes config
//import routes from '../../routes';

// const Header = React.lazy(() => import('./Header'));
const SideBar = React.lazy(() => import('./SideNavigation/index'));
const Footer = React.lazy(() => import('./Footer'));


class Core extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="app">
          <Suspense fallback>
        
        <SideBar>
        <Footer></Footer>
        </SideBar>
       
        </Suspense> 
      </div>
    );
  }
}

export default Core;
