import React from 'react'

const UpdateCard = (props) => {
  return (
    <>
        <div className="bg-white flex items-center gap-2 p-2 rounded-lg">
          <div>
            <p className="text-2xl mx-3">{props.image} </p>
          </div>
          <div>
            <p className="font-bold">{props.head}</p>
            <p className="font-[600] text-sm mt-1">{props.pera}</p>
            <p className="text-sm italic mt-3">{props.date}</p>
          </div>
        </div>
    </>
  )
}

export default UpdateCard