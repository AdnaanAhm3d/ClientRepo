import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import axios from 'axios'
function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [tel, setTel] = useState('')
  const [validator, setValidator] = useState(false)
  const form = useRef()
  const [sent, setSent] = useState(false)

  const { register, handleSubmit } = useForm()

  // useEffect(() => {
  //   if (!validator) {
  //     console.log(`no form filled`)
  //   } else {
  //     console.log(`form filled`)
  //   }
  // }, validator)

  const checkState = () => {
    if (
      name.trim() !== '' &&
      email.trim() !== '' &&
      text.trim() !== '' &&
      tel.trim() !== ''
    ) {
      // setValidator(true)
    }
  }

  checkState()

  const handleChange = () => {
    if (
      name.trim() !== '' &&
      email.trim() !== '' &&
      text.trim() !== '' &&
      tel.trim() !== ''
    ) {
      setValidator(true)
    }
  }

  // useEffect(() => {
  //   console.log(`hello`)
  //   console.log(validator)
  // }, validator)

  const [formState, setFormState] = useState({})
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const url = 'https://api.trishamody.com/trishamody/contact-us'

  const sendData = (data) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setSent(true)
        console.log(`Message sent successfully`)
        // Handle response
      })
      .catch((error) => {
        console.error(`failure`)
        // Handle error
      })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      contactNumber: tel,
      message: text,
    }
    sendData(data)
  }

  return (
    <>
      <Navbar />
      {/* <div>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            name='name'
            value={formState.name || ''}
            onChange={changeHandler}
          />
          <input
            type='email'
            name='email'
            value={formState.email || ''}
            onChange={changeHandler}
          />
          <input type='submit' value='send message' />
        </form>
      </div> */}
      <div className='contact-center'>
        <div className='contact-section'>
          <div className='contactinfo-section'>
            <svg
              viewBox='0 0 418 401'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='contact-svg'
            >
              <path
                d='M108.584 355.088L82.7823 336.84C32.0432 300.955 3.84692 241.084 8.50012 179.112C10.794 148.561 20.9803 119.129 38.0621 93.6965L48.5268 78.1157C68.3724 48.5678 99.0583 28.0263 133.94 20.9393L165.899 14.446C207.729 5.94722 249.997 26.8938 268.569 65.3259C280.57 90.1603 302.937 108.419 329.671 115.205L336.198 116.862C384.017 129.001 417.5 172.044 417.5 221.38V228.096C417.5 238.978 415.975 249.807 412.969 260.266L410.982 267.18C392.741 330.649 338.919 377.483 273.538 386.778L252.22 389.809C201.664 396.996 150.274 384.574 108.584 355.088Z'
                fill='#F2F2F2'
              />
              <path
                d='M309.916 355.088L335.718 336.84C386.457 300.955 414.653 241.084 410 179.112C407.706 148.561 397.52 119.129 380.438 93.6965L369.973 78.1157C350.128 48.5678 319.442 28.0263 284.56 20.9393L252.601 14.446C210.771 5.94722 168.503 26.8938 149.931 65.3259C137.93 90.1603 115.563 108.419 88.829 115.205L82.3019 116.862C34.4826 129.001 1 172.044 1 221.38V228.096C1 238.978 2.52523 249.807 5.53119 260.266L7.51841 267.18C25.7595 330.649 79.5813 377.483 144.962 386.778L166.28 389.809C216.836 396.996 268.226 384.574 309.916 355.088Z'
                stroke='black'
              />
            </svg>
            <div className='contact-info'>
              <h3>Get In Touch</h3>
              <div className='info-line'>
                <span>📨</span>
                <h4>trisha1994@gmail.com</h4>
              </div>
              <div className='info-line'>
                <span>📱</span>
                <h4>(+91) 95-99-53-7681</h4>
              </div>
              <div className='info-line'>
                <span>📨</span>
                <h4>LinkedIn</h4>
              </div>
              <div className='info-line'>
                <span>📨</span>
                <h4>Behance</h4>
              </div>
              <div className='info-line'>
                <span>📨</span>
                <h4>Instagram</h4>
              </div>
            </div>
          </div>
          <div className='form-section'>
            {sent ? (
              <div className='form-sent'>
                <svg
                  width='208'
                  height='208'
                  viewBox='0 0 208 208'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='104'
                    cy='104'
                    r='103'
                    stroke='#5BCE00'
                    stroke-width='2'
                  />
                  <path
                    d='M61 105.5L89 133.5L147.5 75'
                    stroke='#65D10F'
                    stroke-width='2'
                  />
                </svg>
                <div className='form-message'>
                  <h3>Message delivered!</h3>
                  <p>
                    Thanks for reaching out, I’ll get back <br /> to you as soon
                    as possible!
                  </p>
                </div>
              </div>
            ) : (
              <form
                action='/submit-form'
                ref={form}
                className='contact-form'
                onChange={handleChange}
                onSubmit={submitHandler}
              >
                <div className='contact-column'>
                  <label for='name' className='contact-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    {...register('name')}
                    className='contact-input'
                    required
                    // placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='contact-column'>
                  <label for='email' className='contact-label'>
                    Email ID
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='user_email'
                    className='contact-input'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='contact-column'>
                  <label for='name' className='contact-label'>
                    Contact no.
                  </label>
                  <input
                    type='tel'
                    id='tel'
                    name='user_tel'
                    className='contact-input'
                    required
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>
                <div className='contact-column'>
                  <label for='message' className='contact-label'>
                    Message
                  </label>
                  <input
                    type='text'
                    id='message'
                    name='message'
                    className='contact-input'
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  value='Send'
                  className={`${
                    validator ? `contact-button validator` : `contact-button`
                  }`}
                >
                  Send message
                  <svg
                    width='8'
                    height='8'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={`${
                      validator ? 'validator-svg' : 'contact-button-svg'
                    }`}
                  >
                    <path
                      d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                      stroke-width='2.5'
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
function App() {
  return <ContactForm />
}
export default App
