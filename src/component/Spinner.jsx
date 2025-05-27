import React, { Component } from 'react'
import loading from '../assets/images/loading.gif'
export default function Spinner () {
 
    return (
      <div>
        <img src={loading} alt='loading'/>
      </div>
    )
  }