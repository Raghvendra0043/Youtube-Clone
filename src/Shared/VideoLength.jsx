import React from 'react'
import moment from 'moment'

function VideoLength({ time }) {
  const videoLengthInSecond = moment().startOf("day").seconds(time).format("H:mm:ss");
  return (
    <div className='absolute bottom-2 right-2 py-1 px-2 bg-black text-white text-xs rounded-md'>

      {videoLengthInSecond}
    </div>
  )
}

export default VideoLength