import React from 'react'
import Form from '././Form'
import logo from './Jungle Scout Cobalt.png';
import Button from './Button';
import Select from './Select';


const Header = () => {
  return (
    <header className='header'>
        <div className='center'>
            <img className='img' src={logo} alt="Logo" />
      </div>
      <h1 className='h1'>Jungle Scout Cobalt API - SandBox Mode</h1>
      <p className='description'>This page allows you to interact with different API endpoints and pull in structured data that can be downloaded in an excel format</p>
      <p className='Link'>API Sample Reports</p>
      <div className='box'>
        <Form color= 'white' text='API Key Name:' />
        <Form color= 'white' text='API Key:' />
        <Form color= 'white' text='Keyword' />
        <Form color= 'white' text='ASIN' />
        <Form color= 'white' text='API Endpoint' />
        <Select color= 'white' text='Pull The Data' />
        <Button color= 'orange' text='Pull The Data' />

      </div>
    </header>
  )
}

export default Header
