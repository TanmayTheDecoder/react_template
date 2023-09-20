import React from 'react'
import '../components/big-title.css'


const BigTitle = () => {
  return (
    <div className='big-title-container'>
        <div className="big-title-inner">
            <div className="l-side">
                <p>We</p>
                <p>build</p>
                <span>Digital</span>
            </div>
            <div className="r-side">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium voluptas minima sit expedita, quasi pariatur eveniet ea quos, impedit consequuntur inventore ipsum repudiandae. Blanditiis dignissimos sint possimus accusamus mollitia.
                </p>
                <div className="blue-link-box">
                    <a href="https://www.eleconone.com/">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigTitle