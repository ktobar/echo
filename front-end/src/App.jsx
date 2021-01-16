import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/HomePage/Home';
import UserVideos from './components/UserVideosPage/UserVideos';
import Videos from './components/VideosPage/Videos';
import Categories from './components/Categories/Categories';
import EditCategories from './components/Categories/EditCategories';
import ShowMoments from './components/MomentsPage/ShowMoments';

import useApplicationData from './hooks/useApplicationData';


function App() {

  const {
    state,
    dispatch
  } = useApplicationData();

  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div>{userList}</div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/videos">
            <UserVideos />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/categories/edit">
            <EditCategories />
          </Route>
          <Route path="/search">
            <Videos />
          </Route>
          <Route path="/videos/id">
            <ShowMoments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
