import React from 'react'
import './image-gallery.css'

const imageI = require('../assets/images/gallery-I.png')
const imageII = require('../assets/images/gallery-II.png')
const imageIII = require('../assets/images/gallery-III.png')
const imageIV = require('../assets/images/gallery-IV.png')
const imageV = require('../assets/images/gallery-V.png')
const imageVI = require('../assets/images/gallery-VI.png')
const imageVII = require('../assets/images/gallery-VII.png')
const imageIIX = require('../assets/images/gallery-IIX.png')
const imageIX = require('../assets/images/gallery-IX.png')
const ImageGallery = () => {
  return (
    <div className='photos-container'>
        <img src={imageI} alt="" className='adjust-image hoverContent'/>
        <img src={imageII} alt="" className='adjust-image'/>
        <img src={imageIII} alt="" className='adjust-image'/>
        <img src={imageIV} alt="" className='adjust-image'/>
        <img src={imageV} alt="" className='adjust-image'/>
        <img src={imageVI} alt="" className='adjust-image'/>
        <img src={imageVII} alt="" className='adjust-image'/>
        <img src={imageIIX} alt="" className='adjust-image'/>
        <img src={imageIX} alt="" className='adjust-image'/>
    </div>
  )
}

export default ImageGallery