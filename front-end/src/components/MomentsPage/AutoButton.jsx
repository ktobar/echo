import React, { useState } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

export default function SwitchButton(props) {
  const { setVideoInfo } = props;
  const [toggle, setToggle] = useState(true);
  const [ckecked, setChecked] = useState(true)

  const handleOnChange = () => {
    if(toggle){
      setToggle(false);
      setChecked(true);
      setVideoInfo((prev)=>({...prev, loop: 1}));
    }
    if(!toggle){
      setToggle(true);
      setChecked(false);
      setVideoInfo((prev)=>({...prev, loop: 0}));
    }
  };

  return (

    <BootstrapSwitchButton
      // checked={ckecked}
      onlabel='LOOP ON'
      offlabel='OFF'
      onChange={() => handleOnChange()}
      onstyle="success"
      width='80'
    />

  );
}