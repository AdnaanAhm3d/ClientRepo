import React from 'react'
import Navbar from './Navbar'
import SinglePage from './SinglePage'

import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

import { DefaultContext } from '../Contexts/DefaultContext'

import image1 from '../Assets/Images/image-1.webp'
import image2 from '../Assets/Images/image-2.webp'
import image3 from '../Assets/Images/image-3.webp'
import image4 from '../Assets/Images/image-4.webp'
import image5 from '../Assets/Images/image-5.webp'
import image6 from '../Assets/Images/image-6.webp'
import image7 from '../Assets/Images/image-7.webp'
import image8 from '../Assets/Images/image-8.webp'

const Project = () => {
  const { toggleNav, setToggleNav } = useContext(DefaultContext)

  return (
    <>
      <Navbar />
      <div className='project-grid '>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image3} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image4} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image5} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image7} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image1} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image6} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image2} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image8} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/singleproject'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image3} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 18L18 2M18 2H2M18 2V18'
                      stroke='white'
                      stroke-width='4'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Project
