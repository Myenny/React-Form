import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function User() {
  const [randomUserDataJson, setRandomUserDataJson] = useState(null);

  const fetchRandomData = () => {
    return axios.get('https://randomuser.me/api/')
    .then(({data}) => {
      // handle success
      console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch(err => {
      // handle error
      console.log(err);
    })
  }

  useEffect(() => {
    fetchRandomData().then(randomData => {
      setRandomUserDataJson(randomData || 'No data');
  })
}, []);


  return (
    <div>
      <pre>{randomUserDataJson}</pre>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-black" onClick={fetchRandomData}>Fetch Random User Data</button>
    </div>
  )
}

export default User;