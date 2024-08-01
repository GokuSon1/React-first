"use client"
import React, { useState } from 'react'

const Home = () => {
  return (
   <> 
   <div className='main relative'>
   <h1 className='font-bold text-5xl text-center '>HOME!
   </h1>
   <div className='flex flex-wrap absolute child1'>
   <img className='child' src="https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-9.jpg" alt="" />
   <img className='child' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
   <img className='child'  src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt="" />
   <img className='child' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
   </div>
   </div>
   </>
  )
}

export default Home

