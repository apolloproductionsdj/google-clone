import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>This is the Home Page</h1>
      {/* Header */}
      <div className="home__header">
        <div className="header__left">
          <Link to='about'>About</Link>
          <Link to='about'>Store</Link>
          {/* link */}
        </div>
        <div className="header__right">
        <Link to='about'>Gmail</Link>
        <Link to='about'>Images</Link>
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>

      {/* Body */}
      <div className="home__body">
        
      </div>  
    </div>
  )
}

export default Home;
