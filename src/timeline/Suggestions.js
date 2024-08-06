import { Avatar } from "@mui/material";
import React from 'react';
import './Suggestions.css';

function Suggestions() {
  return (
    <div className='suggestions'>
      <div className='suggestions__title'>Suggestions for you </div>
      <div className='suggestions__usernames'>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>A</Avatar>
              </span>
              <div className="username__info">
                <span className="username">Ahmed</span>
                <span className="relation">New to Instagram</span>
              </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>K</Avatar>
              </span>
              <div className="username__info">
                <span className="username">Khurram</span>
                <span className="relation">New to Instagram</span>
              </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>K</Avatar>
              </span>
              <div className="username__info">
                <span className="username">Konain</span>
                <span className="relation">New to Instagram</span>
              </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>L</Avatar>
              </span>
              <div className="username__info">
                <span className="username">Laraib</span>
                <span className="relation">New to Instagram</span>
              </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>B</Avatar>
              </span>
              <div className="username__info">
                <span className="username">Bisma</span>
                <span className="relation">New to Instagram</span>
              </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

      </div>
    </div>
  )
}

export default Suggestions
