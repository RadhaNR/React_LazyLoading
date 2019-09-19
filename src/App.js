import React, { Suspense } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import { FaTruckLoading } from 'react-icons/fa';
import ErrorBoundary from './ErrorBoundary';

const Artists = React.lazy(() => import('./Artists'));
const Two = React.lazy(() => import('./Two'));
const Three = React.lazy(() => import('./Three'));
const Four = React.lazy(() => import('./Four'));
const Five = React.lazy(() => import('./Five'));


// import  Artists  from './Artists';
// import  Two  from "./Two";
// import  Three  from "./Three";
// import Four  from "./Four";
// import  Five from './Five';


function App() {
  return (
    <div className="App">
      
        <Suspense fallback={<div>Loading...<FaTruckLoading /></div>}>
          <HashRouter>
            <>
              <Link to="/one">One | </Link>
              <Link to="/two">Two | </Link>
              <Link to="/three">Three | </Link>
              <Link to="/four">Four | </Link>
              <Link to="/five">Five | </Link>
              <Switch>
                <Route path="/one"  exact render={()=> <ErrorBoundary><Artists/></ErrorBoundary>}/>
                <Route path="/two" component={Two} />
                <Route path="/three" render={()=> <ErrorBoundary><Three/></ErrorBoundary>}/>
                <Route path="/four" render={()=> <ErrorBoundary><Four/></ErrorBoundary>}/>
                <Route path="/five" render={()=>  <ErrorBoundary><Five/></ErrorBoundary>} />
                
              </Switch>
            </>
          </HashRouter>
        </Suspense>
     
    </div>
  );
}

export default App;
