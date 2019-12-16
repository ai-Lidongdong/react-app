import React from 'raect';
import Loadable from 'react-loadable';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Loading from '@/component/loading';
const Home = Loadable( {loader: () => import("@/pages/Home/home"), loading: Loading});
const Home = Loadable( {loader: () => import("@/pages/Home/home"), loading: Loading});
const Home = Loadable( {loader: () => import("@/pages/Home/home"), loading: Loading});
const Home = Loadable( {loader: () => import("@/pages/Home/home"), loading: Loading});

class Routes extends React.Component{
    render() {
        return (
            <BrowserRouter>
              <div className="routes">
                  <Switch>
                      <Route path="/home" component={Home}/>
                      <Route path="/kind" component={Kind}/>
                      <Route path="/cart" component={Cart}/>
                      <Route path="/user" component={User}/>
                      <Redirect to="/home"/>
                  </Switch>
              </div>
            </BrowserRouter>
        )
    }
}
export default Routes