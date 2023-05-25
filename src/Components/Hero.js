import React from 'react'
// import resume from '../Assets/Resume/Trisha Mody_Resume.pdf'
import image1 from '../Assets/Images/image-1.png'
import { Link } from 'react-router-dom'
import { delay, easeIn, motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero-body'>
      <div className='hero-parent'>
        <motion.div className='hero-sibling-one'>
          <motion.h1
            className='hero-title'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: easeIn }}
          >
            Hey there!👋🏻
          </motion.h1>
          <motion.h2
            className='hero-intro'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2, ease: easeIn }}
          >
            I’m Trisha — I design intuitive <br /> user experiences.
          </motion.h2>
          <motion.p
            className='hero-para'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.4, ease: easeIn }}
          >
            With a Masters in Product Design Management at{' '}
            <a href='#' className='para-links'>
              Rubika
            </a>
            , I’ve lead various commercialisation projects at{' '}
            <a href='#' className='para-links'>
              Microsoft
            </a>
            ,{' '}
            <a href='#' className='para-links'>
              Samsung
            </a>{' '}
            and{' '}
            <a href='#' className='para-links'>
              Atlassian
            </a>{' '}
            that have impacted millions of users globally.
          </motion.p>
          <a href='Trisha Mody_Resume.pdf' download='Trisha Mody_Resume.pdf'>
            <button className='hero-btn'>
              Download Resume{' '}
              <svg
                width='14'
                height='13'
                viewBox='0 0 14 13'
                xmlns='http://www.w3.org/2000/svg'
                className='hero-btn-svg'
              >
                <path
                  d='M7.08582 0.135458V11.4492M7.08582 11.4492L12.7427 5.79231M7.08582 11.4492L1.42897 5.79231'
                  stroke-width='2'
                />
              </svg>
            </button>
          </a>
        </motion.div>
        <motion.div
          className='hero-sibling-two'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: easeIn }}
        >
          {/*  */}
          <div className='hero-link'>
            <div className='hero-link-title'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                  stroke='black'
                  stroke-width='2.5'
                />
              </svg>
              <Link to='/project'>
                <h3>Projects</h3>
              </Link>
            </div>
            <div className='hero-project-tiles'>
              <Link to='/project'>
                <img src={image1} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image1} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image1} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image1} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image1} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image1} alt='project image' />
              </Link>
            </div>
          </div>
          {/*  */}
          <div className='hero-link'>
            <div className='hero-link-title'>
              <Link to='/aboutme'>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                    stroke='black'
                    stroke-width='2.5'
                  />
                </svg>
              </Link>
              <Link to='/aboutme'>
                <h3>About me</h3>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className='hero-link'>
            <div className='hero-link-title'>
              <Link to='/letsconnect'>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                    stroke='black'
                    stroke-width='2.5'
                  />
                </svg>
              </Link>
              <Link to='/letsconnect'>
                <h3>Let's Connect</h3>
              </Link>
            </div>
          </div>
          <a href='Trisha Mody_Resume.pdf' download='Trisha Mody_Resume.pdf'>
            <button className='hero-btn-mobile'>
              Download Resume{' '}
              <svg
                width='14'
                height='13'
                viewBox='0 0 14 13'
                xmlns='http://www.w3.org/2000/svg'
                className='hero-btn-svg'
              >
                <path
                  d='M7.08582 0.135458V11.4492M7.08582 11.4492L12.7427 5.79231M7.08582 11.4492L1.42897 5.79231'
                  stroke-width='2'
                />
              </svg>
            </button>
          </a>
          {/*  */}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
