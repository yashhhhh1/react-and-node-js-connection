import { useState,useEffect } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/data')
      .then(response => {
        setData(response.data.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [data1, setData1] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => {
        setData1(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {data}{data1}
    </>
  )
}

export default App
