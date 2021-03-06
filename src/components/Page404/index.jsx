import React, { useState, useEffect } from 'react'
import explodingRocket from '../../images/exploding-rocket.gif';
import { Link } from 'react-router-dom';

const Page404 = () =>  {
  const [ isShown, showMessage ] = useState(false);

  const startTimeout = () => {
    setTimeout(() => showMessage(true), 4000);
  }

  useEffect(() => startTimeout(), [])

  return (
    <section className='page-404'>
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>

      <div>
        { isShown ? <h2>Nothing here :(</h2> : undefined }
        <img src={ explodingRocket } alt='exploding rocket'/>
      </div>
      <Link to='/'>
        <span>Take Me Home</span>
      </Link>
    </section>
)}

export default Page404;
