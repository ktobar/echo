import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Button from '../shared/Button';
import List from '../shared/ListWithEditDelete';

import useApplicationData from '../../hooks/useApplicationData';

export default function EditCategories(props) {

  const { state } = useApplicationData();
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm(true);

  return (
    <div className="EditCategories">
      <h4>Edit categories</h4>
      <Button onClick={handleClick}>Add category</Button>

      {showForm && 
      <InputGroup className="mb-3" style={{width: "30%"}}>
        <FormControl
          placeholder="Category name"
          aria-label="Category name"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Save</Button>
          <Button variant="outline-secondary">Cancel</Button>
        </InputGroup.Append>
      </InputGroup>
      }

      <List>Categories</List>
    </div>
  );
}