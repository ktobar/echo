import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PasteBar(props) {

  const { setSelectedVideoID, setState } = props;

  const [url, setUrl] = useState('');
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    const youtubeId = url.slice(32, 43);

    setSelectedVideoID(youtubeId);
    setState((prev) => ({...prev, oldVideo: false }));

    history.push('/moments');
  };

  const onInput = event => {
    const input = event.target.value;

    setUrl(input);
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup onChange={onInput} className="paste-bar" >
        <FormControl
          placeholder="Paste Video Link"
          aria-label="Video Urls"
        />
        <InputGroup.Append>
          <Button type="submit" value={url} variant="outline-dark" >Submit</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}