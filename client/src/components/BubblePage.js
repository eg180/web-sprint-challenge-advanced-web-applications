import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);


  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    console.log('inside useEffect')
    const token = window.localStorage.getItem('token');

    const getData = () => {
      axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
    }
  })




  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
