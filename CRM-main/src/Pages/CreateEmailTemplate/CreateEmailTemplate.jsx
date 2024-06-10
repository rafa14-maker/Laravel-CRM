import React from 'react'
import Editor from "../../Components/Editor.jsx"
import { Link } from 'react-router-dom'


const CreateEmailTemplate = () => {
  return (
    <>
      <div className='bg-[#f8fafa] w-full h-fit p-3 pb-1'>
        <div className='bg-white border-[1px] w-full h-full rounded-md p-3'>

          <div className='flex justify-between items-start px-6'>
            <p className='text-2xl font-semibold text-[#212529]'>Add Email Template</p>
            <Link to={"/emailTemplate"}><button className='text-sm bg-[#12344d] text-white p-1 px-3 rounded-md hover:bg-blue-600'>Back</button></Link>
          </div>


          {/* input and table div */}

          <div className='border-[1px] mt-3 p-3 rounded-md'>

              <div className='flex gap-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Template Name</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Email Subject</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='w-full mt-6'>
                    <p className='text-xs'>Email Subject</p>
                    <Editor/>
              </div>
          </div>


          <hr  className='mt-5'/>

          <div className='mt-5 flex justify-end mb-3'>
            <button className='text-sm bg-[#12344d] text-white p-1 px-3 rounded-md hover:bg-blue-600'>Save Template</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default CreateEmailTemplate