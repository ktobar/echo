import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import SearchBar from '../shared/SearchBar';

import Card from 'react-bootstrap/Card';
import Button from '../shared/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

export default function UserVideos(props) {
  const videos = props.state.videos;

  const [showAlert, setShowAlert] = useState(false);
  const [alertVid, setAlertVid] = useState(null);


  const handleAlert = vid => {
    setAlertVid(vid);
    setShowAlert(true);
  };

  const handleDelete = (video) => {

    setShowAlert(false);

    return axios.delete('http://localhost:3001/api/videos', { params: video.id })
      .then(response => {
        console.log('client says: delete request sent');
        console.log(response.data);
        props.setState(prev => ({ ...prev, videos: videos.filter((vid) => vid.id !== video.id) }));
      })
      .catch(err => { console.log('error:', err); });

  };

  //------------------------------------------------------------------//
  const videoList = videos && videos.map((video, index) => {

    const youtubeId = video.link.slice(32, 43);
    const thumbnail = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;

    const videoOnClick = () => {
      props.onVideoSelected(youtubeId);
      props.setState((prev) => ({ ...prev, oldVideo: true, selectedVidId: video.id }));
    };

    return (

        <Card key={index} className='userVideos' style={{ width: "23em" }} onClick={() => videoOnClick()}>
          <Link to="/moments">
            <Card.Header closeButton>
              {video.title}
            </Card.Header>
            <Card.Img variant="bottom" src={thumbnail} alt="thumbnail" />
          </Link>
          <Button onClick={() => handleAlert(video)}>Delete</Button>
          <br></br>
        </Card>

    );
  });

  return (
    <>
      <div className="Uservideos">
        <h4>All User Videos</h4>
        {/* <SearchBar /> */}

        <Modal show={showAlert} onHide={() => setShowAlert(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Video</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Alert show={true} variant="danger">
              <p>Video:<h4>{alertVid && alertVid.title}</h4></p>
              <p>Will be removed and cannot be undone. Proceed?</p>
            </Alert>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAlert(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleDelete(alertVid)}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal>
        <div class="user-video-list">
          {videoList}
        </div>
      </div>
    </>
  );
}