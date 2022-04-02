import React from 'react';
import './card.css';
import LOGOSVG from '../assets/logo.svg';
import DOCSVG from '../assets/icon-document.svg';
import FOLDERSVG from '../assets/icon-folder.svg';
import UPLOADSVG from '../assets/icon-upload.svg';

export default function Card() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='icon-card'>
          <img
            src={LOGOSVG}
            alt=''
            className='logo'
          />
          <div className='icons'>
            <img
              src={DOCSVG}
              alt=''
              className='document-icon'
            />
            <img
              src={FOLDERSVG}
              alt=''
              className='folder-icon'
            />
            <img
              src={UPLOADSVG}
              alt=''
              className='upload-icon'
            />
          </div>
        </div>
        <div className='progress-card'>
          <h3>
            You've used <b>815 GB</b> of your
            storage
          </h3>
          <div className='progress-bar'>
            <div className='w3-green'></div>
          </div>
          <div className='data-availability'>
            <h4>0 GB</h4>
            <h4>1000 GB</h4>
          </div>
        </div>
        <div className='data-card'>
          <h2>185</h2> GB LEFT
        </div>
        <div className='triangle'></div>
      </div>
    </div>
  );
}
