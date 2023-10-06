import React from 'react'

export default function Banner() {
 const bannerStyle = {
    maxWidth: '100%',
    height: '300px',
    width: '100vw',
 }
 
    return (
    <div id="banner">
        <img src="banner.jpg"alt="banner" style={bannerStyle} />
        </div>
  );
}



