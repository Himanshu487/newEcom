import React from 'react'
// import cover from "../src/public/images"

function BackgroundImage() {
  return (
    <div className='banner'
    style={{
        backgroundSize:"cover",
        // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        // backgroundImage: `url("../public/images/cover.jpg")`,
        backgroundPosition: "center center",
     }}
    >BackgroundImage</div>
  )
}

export default BackgroundImage

