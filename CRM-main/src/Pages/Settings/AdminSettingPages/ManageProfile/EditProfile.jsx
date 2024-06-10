import { Select } from 'antd';
import React from 'react';
import Flag from '../../../../Components/Navbar/Flag';

const EditProfile = () => {
  return (
    <>
      <div className='main-container flex flex-col md:flex-row items-start gap-4 p-5 bg-[#f8fafa] w-full h-auto'>
        {/* Container 1 */}
        <div className='w-full md:max-w-[70%] bg-white border-2 border-[#f1f1f1] rounded-xl mb-8 md:mb-0'>
          <p className='text-blue-600 font-medium text-md p-3'>Edit Profile</p>
          <hr />
          <div className='flex  justify-between items-end gap-4 mx-2 mt-6 max-[500px]:flex-wrap'>
            <select className='p-2 border-2 border-[#ddd] rounded w-full '>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
            </select>
            <div className='flex flex-col w-full '>
              <label htmlFor="Name" className="text-sm">Name</label>
              <input type='text' placeholder='TravBizz' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
            </div>
          </div>
          <div className='mx-2 mt-2'>
            <label htmlFor="Email" className="text-sm">Email Address</label>
            <input type='email' placeholder='Email' className='p-2 border-2 border-[#ddd] rounded-md w-full bg-[#e3e6e6]' />
          </div>
          <div className='flex  justify-between items-center gap-4 mx-2 mt-2 max-[500px]:flex-wrap'>
            <div className='flex flex-col w-full '>
              <label htmlFor="Mobile" className="text-sm">Mobile</label>
              <div className='flex'>
                <select name="code" id="code" className='border-2 py-2'>
                  <option value="code">
                    +91 <Flag />
                  </option>
                </select>
                <input type='number' placeholder='12345678' className='p-2 border-2 border-[#ddd] border-l-0 rounded-r-md w-full' />
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="ProfileImage" className='text-sm'>Profile Image</label>
              <label htmlFor="fileUpload" className='flex items-center justify-between border-2 w-full '>
                <input type="file" id="fileUpload" style={{ display: 'none' }} />
                Choose File
                <span className='bg-gray-300 py-2 px-3'>Browse</span>
              </label>
            </div>
          </div>
          <div className='mx-2 mt-2'>
            <label htmlFor="Website" className="text-sm">Website</label>
            <input type='url' placeholder='Website' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
            <hr className='mt-5 border-[#e7e9e9]' />
            <p className='text-sm mt-3'>Themes</p>
            <hr className='mt-4 border-[#e7e9e9]' />
            <div className='flex flex-wrap gap-2 mt-5'>
              {/* Example of a theme color option */}
              {['#f14242', '#b1ce30', '#4033f8', '#d36c6c', '#4d811c', '#37fceb', '#180505', '#ff8534', '#2f155e', '#baca71', '#ecb8b8', '#d9db39', '#1b5728', '#d3f166', '#eb3cb6', '#1b5723', '#f1ba41', '#942ead', '#4033f8', '#d36c6c', '#4d811c', '#37fceb', '#180505', '#ff8534', '#2f155e', '#baca71', '#ecb8b8'].map((color, index) => (
                <div key={index} className='w-5 h-5 rounded-full' style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <hr className='mt-5 border-[#e7e9e9]' />
          </div>
          <div className='flex justify-end gap-5 mx-2 mt-3 p-5'>
            <button className='bg-[#e2f0f0] px-3 py-1 text-base border-2 border-[#f1f1f1e5] rounded'>Cancel</button>
            <button className='bg-[#2c3d3d] text-white px-2 py-1 text-base rounded'>Save Changes</button>
          </div>
        </div>

        {/* Container 2 */}
        <div className='w-[700px] max-w-full md:max-w-[100%] flex flex-col gap-5'>
          {/* Change Password */}
          <div className='bg-white border-2 border-[#f1f1f1] rounded-xl'>
            <p className='text-blue-600 font-medium text-md p-3'>Change Password</p>
            <hr className='border-[#e7e9e9] '/>
            <div className='flex flex-col gap-3 mx-2 mt-6'>
              <div className='flex flex-col'>
                <label htmlFor="OldPassword" className="text-sm">Old Password</label>
                <input type='password' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="NewPassword" className="text-sm">New Password</label>
                <input type='password' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="ConfirmPassword" className="text-sm">Confirm Password</label>
                <input type='password' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
              </div>
            </div>
            <div className='flex justify-end mx-3 mt-3 mb-3'>
              <button className='bg-[#2c3d3d] text-white text-base px-2 py-1 rounded'>Change Password</button>
            </div>
          </div>

          {/* Change Pin */}
          <div className='bg-white border-2 border-[#f1f1f1] rounded-xl'>
            <p className='text-blue-600 font-medium text-md p-3'>Change Pin</p>
           
            <hr />
            <div className='flex flex-col gap-3 mx-2 mt-6'>
              <div className='flex flex-col'>
                <label htmlFor="OldPin" className="text-sm">Old Pin</label>
                <input type='password' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="NewPin" className="text-sm">New Pin</label>
                <input type='password' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="ConfirmPin" className="text-sm">Confirm Pin</label>
                <input type='password' className='p-2 border-2 border-[#ddd] rounded-md w-full' />
              </div>
            </div>
            <div className='flex justify-end mx-3 mt-3 mb-3'>
              <button className='bg-[#2c3d3d] text-white text-base px-2 py-1 rounded'>Change Pin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile;
