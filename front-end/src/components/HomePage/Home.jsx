import SearchBar from '../shared/SearchBar';
import PasteBar from './PasteBar'
import Button from '../shared/Button';
import VideoList from '../shared/VideoList';

export default function Home(props) {
  const { onSearch, onVideoSelected, data, setSelectedVideoID, setState } = props;

  return (

    <div className="Home">
      <h3>Welcome message</h3>
      <div class="link-input">
        <PasteBar setSelectedVideoID={setSelectedVideoID} setState={setState}/>
        <br></br>
        <p>- OR -</p>
        <SearchBar onSearch={onSearch} />
      </div>
        <VideoList onVideoSelected={onVideoSelected} data={data} />

    </div>

  );
}