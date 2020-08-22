import React from 'react'
import logo from '../covid19.webp'
import '../App.css'
export const Navbar = () => {
  return (
    <div className={'title'}>
      <h1 className={'title-text'}>C<span id={'space'}>
        <img id={'img'} alt='virus logo' src={logo} width={'100px'}></img></span>VID-19</h1>
      
    </div>
  )
}
