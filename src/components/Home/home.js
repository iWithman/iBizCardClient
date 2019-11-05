import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

import './home.css';

const Home = () => {

  const [user, setUser] = useState('')


  useEffect(() => {
    const getUserInfo = async () => {
      try{
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
      }catch(ex) {
        console.log(ex);
      }
    }
    getUserInfo()
  }, []);

// let word = "ibusiness card"
// let split = word.split(' ')
// let join = split.join('')
// console.log(join);

  return ( 
    <section id='home'>
      <div className='container'>
        <h1>Home</h1>
      </div>
      
    </section>
   );
}

 
export default Home;