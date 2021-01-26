import { Link } from "react-router-dom"

import Card from 'react-bootstrap/Card';
// import "../../stylesheets/_video.scss";

function selectVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);

}

function constructVideoTitles(videosData, onVideoSelected) {
  return videosData.map(({ snippet, id }, index) => {
    const thumbnail = `https://img.youtube.com/vi/${id.videoId}/mqdefault.jpg`;
    if (id.videoId) {
      return (
        <Link to="/moments" >
          <Card key={index} className='userVideos' style={{ width: "23em" }} onClick={() => selectVideo(id, onVideoSelected)}>
            <Card.Header closeButton>
              {snippet.title}
            </Card.Header>
            <Card.Img variant="bottom" src={thumbnail} alt="thumbnail" />
            <br></br>
          </Card>
        </Link>
      )
    }
  });
}

const Video = ({ data, onVideoSelected }) => {
  return (
    <div id="search" className="search-results">
      {constructVideoTitles(data, onVideoSelected)}
    </div>
  )
};

export default Video;