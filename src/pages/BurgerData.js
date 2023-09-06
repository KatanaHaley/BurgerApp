import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card.js';

const BurgerData = () => {
  const [data, setData] = useState([]);
  const url = 'http://localhost:8000/burgers'

  const fetchInfo = async ()  => {
    const burgerData = await axios.get(url)
    const info = Object.keys(burgerData.data.data).map(burger => burgerData.data.data[burger])
    setData(info)
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  // console.log(data)

  return (
    <div>
      <h1 className="">Find The Best Burgers in the DFW</h1>
    <div className="burger-feed">
      {data?.map(data => <Card key={data.id} data={data}/>)}
    </div>
    </div>
  )
}

export default BurgerData