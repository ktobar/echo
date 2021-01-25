import Nav from 'react-bootstrap/Nav';

import Button from '../shared/Button';
import CategoriesList from './ShowCategoriesList';

export default function ShowCategories(props) {

  const { state, setState, onVideoSelected, selectedVideoID } = props;

  return (

    <div className="ShowCategories">

      {/* <h4>Categories</h4> */}
      {/* <Button onClick={props.onEdit}>
        Edit categories
      </Button> */}
      <br /><br /><br />
      <CategoriesList state={state} setState={setState} onVideoSelected={onVideoSelected} selectedVideoID={selectedVideoID} />
    </div>

  );
};