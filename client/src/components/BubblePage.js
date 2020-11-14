import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);


  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {

    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      console.log(res.data)
      setColorList(res.data)
    })
    .catch(err => {
    console.log('something went wrong while fetching data')
    })
  });

  const updateColors = res => {
    // setColorList(res.data)
    console.log('in BubblePage')
    console.log(res)
  }


  return (
    <>
    <ColorList colors={colorList} updateColors={updateColors} />
    <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
