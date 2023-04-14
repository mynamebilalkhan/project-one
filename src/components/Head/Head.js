import React from 'react';
import './Head.css';
import { Header } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const items = [
     {
          label: (
               <Link to="/">Home</Link>
          ),
          key: 'home',
     },
     {
          label: (
               <Link to="/about">About</Link>
          ),
          key: 'about',
     },
     {
          label: (
               <Link to="/login">Login</Link>
          ),
          key: 'login',
     },
     {
          label: (
               <Link to="/register">Register</Link>
          ),
          key: 'register',
     },

];

export default function Head() {
     const [current, setCurrent] = useState('home');
     const onClick = (e) => {
          console.log('click ', e);
          setCurrent(e.key);
     };
     return (
          <Header className='header-section'>
               <div className='logo'>
                    <Link to="/" className='brand-link'>
                         <span><strong>Project A</strong></span>
                    </Link>
               </div>
               <div className='nav-menu'>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
               </div>
          </Header>
     );


}