import React from 'react'
// import resume from '../Assets/Resume/Trisha Mody_Resume.pdf'
import image1 from '../Assets/Images/image-1.webp'
import image2 from '../Assets/Images/image-2.webp'
import image3 from '../Assets/Images/image-3.webp'
import image4 from '../Assets/Images/image-4.webp'
import image5 from '../Assets/Images/image-5.webp'
import image6 from '../Assets/Images/image-6.webp'
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
            Hey there!&nbsp;👋🏻
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
            With a Masters in Product Design Management from{' '}
            <a
              href='https://en.rubika-edu.com/programs/design/product-design/'
              target='_blank'
              className='para-links'
            >
              Rubika
            </a>
            , I’ve lead various commercialisation projects at{' '}
            <div className='para-links'>Atlassian</div>,{' '}
            <div href='#' className='para-links'>
              Samsung
            </div>{' '}
            and{' '}
            <Link to='/singleproject' className='para-links'>
              Microsoft
            </Link>{' '}
            that have impacted millions of users globally.
          </motion.p>
          <a href='Trisha Mody_Resume.pdf' download='Trisha Mody_Resume.pdf'>
            <button className='hero-btn'>
              Download Resume{' '}
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='hero-btn-svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M6.00001 9.74263V0.84314H8.00001V9.74263L11.9498 5.79289L13.364 7.2071L7.00001 13.5711L0.636047 7.2071L2.05026 5.79289L6.00001 9.74263Z'
                  // fill='black'
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
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.999972 0.75H14.25V14H11.75V5.01777L1.88386 14.8839L0.116089 13.1161L9.98221 3.25H0.999972V0.75Z'
                  fill='black'
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
                <img src={image2} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image3} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image4} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image5} alt='project image' />
              </Link>
              <Link to='/project'>
                <img src={image6} alt='project image' />
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
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0.999972 0.75H14.25V14H11.75V5.01777L1.88386 14.8839L0.116089 13.1161L9.98221 3.25H0.999972V0.75Z'
                    fill='black'
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
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0.999972 0.75H14.25V14H11.75V5.01777L1.88386 14.8839L0.116089 13.1161L9.98221 3.25H0.999972V0.75Z'
                    fill='black'
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
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='hero-btn-svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M6.00001 9.74263V0.84314H8.00001V9.74263L11.9498 5.79289L13.364 7.2071L7.00001 13.5711L0.636047 7.2071L2.05026 5.79289L6.00001 9.74263Z'
                  fill='white'
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
