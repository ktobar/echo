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
import Videos from './components/VideosPage/Videos';
import Categories from './components/Categories/Categories';
import ShowMoments from './components/MomentsPage/ShowMoments';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

// youtube video components
import SearchBar from './components/shared/SearchBar'
import VideoList from './components/shared/VideoList'


function App() {

  const { state, setState, onVideoSelected, onSearch } = useApplicationData();

    return (
      <React.StrictMode>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          {state.userId && <div>user: {state.userId}</div>}
          <Switch>
            <Route exact path="/">
                <Home onSearch={onSearch} onVideoSelected={onVideoSelected} data={state.videoMetaInfo}/>
            </Route>
            <Route exact path="/videos">
              <UserVideos state={state} onVideoSelected={onVideoSelected}/>
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/search">
              <Videos />
            </Route>
            <Route exact path="/videos/id">
                <ShowMoments selectedVideoID = {state.selectedVideoID}/>                
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
