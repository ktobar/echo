import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//hooks
import useApplicationData from './hooks/useApplicationData';

//local components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/HomePage/Home';
import UserVideos from './components/UserVideosPage/UserVideos';
import Videos from './components/SearchResults/Videos';
import Categories from './components/Categories/Categories';
import ShowMoments from './components/MomentsPage/ShowMoments';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {

  const { state, setState, cookies, onVideoSelected, onSearch, momentsBySelectedVid, setSelectedVideoID } = useApplicationData();

  // const momentPath = `/videos/${state.selectedVideoID}`
    // console.log("APP state: ", state)

    // console.log("App selectedVideoID=",state.selectedVidId)
    return (
      <React.StrictMode>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          {state.userId && <div>user: {state.userId}</div>}
          <Switch>
            <Route exact path="/">
                <Home onSearch={onSearch} onVideoSelected={onVideoSelected} data={state.videoMetaInfo} setSelectedVideoID={setSelectedVideoID} />
            </Route>
            <Route exact path="/videos">
              <UserVideos state={state} setState={setState} onVideoSelected={onVideoSelected} selectedVideoID = {state.selectedVideoID}/>
            </Route>
            <Route exact path="/categories">
              <Categories state={state} setState={setState} cookies={cookies} />
            </Route>
            <Route exact path="/search">
              <Videos />
            </Route>
            <Route path="/moments">
                <ShowMoments state={state} setState={setState} selectedVideoID = {state.selectedVideoID} momentsBySelectedVid={momentsBySelectedVid} categories={state.categories} oldVideo={state.oldVideo} categWithId={state.categWithId} selectedVidId={state.selectedVidId} />                             
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
      </React.StrictMode>
    );
}


export default App;
