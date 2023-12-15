import React from 'react'


const Share = ({toggleShare}) => {
  return (
    <div className=''>
        SHARE facebook twitter pinterest 
        <button className="bg-lightGrayishBlue w-8 h-8 rounded-full flex items-center justify-center" onClick={toggleShare}>
                <img
                  // src={shareBlk}
                  alt="Share icon"
                  className="opacity-75 self-center"
                />
              </button>
    </div>
  )
}

export default Share
