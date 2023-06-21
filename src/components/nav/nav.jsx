import React from 'react'
import './nav.css'
import {AiTwotoneHome}from 'react-icons/ai'
import {AiOutlineUser}from 'react-icons/ai'
import {BiBook}from 'react-icons/bi'
import {BiMessageSquareDetail}from 'react-icons/bi'
import {useState} from 'react'

const nav = () => {
  return (
    <nav>
      <a href="#"className='active'><AiTwotoneHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>


    </nav>
  )
}
export default nav
