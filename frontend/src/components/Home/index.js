import React, { useState } from 'react';
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout';

export const Home = () => {
  const [imageName, setImageName] = useState('Banner.png');
  const bannerImage = require(`../../assets/images/${imageName}`);
  return (
    <>
    <div> <Navbar /></div>
    
      <div className='container-fluid  mt-1  justify-center'>

        <header className='d-flex mb-5' style={{ position: 'relative', width: '100%' }}>
          <img
            src={bannerImage}
            alt="Banner"
            style={{ width: '100%', height: '90vh' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', color: 'white' }}>
            <h1>Welcome to FragranceHaven.com</h1>
            <p>Where fragrance meets luxury!</p>
          </div>
        </header>
        <main>
        <div className="card">
  <h5 className="card-header">Blossoms of Desire</h5>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">"Perfume is the key to our memories." - Kate Lord Brown</p>
    <NavLink  className="btn btn-primary" to='/products'>Shop Now</NavLink>
  </div>
</div>
        </main>

      </div>
    </>
  );
};


export default Home;