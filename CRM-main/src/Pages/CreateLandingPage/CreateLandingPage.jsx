import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom'
import CenterModal from '../Queries/ViewProposal/CenterModal';

const CreateLandingPage = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
    if (content === exportModal) {
      return console.log("Export");
    }
  };



  

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const selectModal = <div>
     <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2  items-center w-[800px]'>
      <h3>Select Package</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr className=''/>

    <div className='p-6'>
      <input type="text" placeholder='Search Package' className='outline-none border w-full p-4'/>
    </div>
  </div>


  return (
    <>
      <div className='bg-[#f8fafa] w-full h-fit p-3 pb-8'>
        <div className='bg-white border-[1px] w-full h-full rounded-md p-3'>

          <div className='flex justify-between items-start px-6'>
            <p className='text-2xl font-semibold text-[#212529]'>Add Landing Page</p>
            <Link to={"/landingPages"}><button className='text-sm bg-[#12344d] text-white p-1 px-3 rounded-md hover:bg-blue-600'>Back</button></Link>
          </div>


          {/* input and table div */}

          <div className='border-[1px] mt-3 p-3 rounded-md'>

              <div className='flex gap-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Template Name</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Banner (1500px - 500px)</p>
                    <input type="file" className='outline-none p-1 text-sm mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Banner Heading</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Banner Subheading</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Enquiry Heading</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Enquiry Subheading</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Contact Number</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Email Id</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Address</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-[80%] max-[800px]:w-full'>
                    <p className='text-xs'>Main Heading</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-[60%] max-[800px]:w-full'>
                    <p className='text-xs'>URL (Slug) - https://travbizz.website/crm/landing-page/</p>
                    <input type="text" placeholder='Eg.my-goa-packages' className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Description</p>
                    <textarea rows={4} type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='w-full mt-5 border'>
                <div className='flex justify-between bg-[#f7f7f7] p-2 border-b items-center'>
                  <p className='font-semibold text-[#212529]'>Selected Packages</p>
                    <button  onClick={() => handleOpenModal(selectModal)} className='text-sm bg-[#12344d] text-white p-1 px-3 rounded-md hover:bg-blue-600'>+ Selected Packages</button>
                </div>

                <div className='w-full p-4'>
                  <table className='w-full'>
                    <tr className='bg-[#f7f7f7] w-full border'>
                      <td className='border p-2 text-sm font-semibold text-[#605959]'>Title</td>
                      <td className='border p-2 text-sm font-semibold text-[#605959]'>Duration</td>
                      <td className='border p-2 text-sm font-semibold text-[#605959]'>Price</td>
                      <td className='border p-2 text-sm font-semibold text-[#605959]'>By</td>
                      <td className='border p-2 text-sm font-semibold text-[#605959]'></td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Lead Source</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Facebook</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Instagram</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Twitter</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Youtube</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Pinterest</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Meta Title</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Meta Description</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Meta Keyword</p>
                    <input type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5 max-[800px]:flex-wrap'>
                <div className='w-full'>
                    <p className='text-xs'>Header Script</p>
                    <textarea rows={4} type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
                <div className='w-full'>
                    <p className='text-xs'>Footer Script</p>
                    <textarea rows={4} type="text" className='outline-none p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'/>
                </div>
              </div>

              <div className='flex gap-5 mt-5'>
                <div className='w-[32%] max-[800px]:w-full'>
                    <p className='text-xs'>Status</p>
                    <select className='outline-none mb-3 p-1 mt-1 rounded-md w-full border-[1px] border-[#ced4da] focus:border-black transition-all'>
                      <option value="">In Active</option>
                      <option value="">Active</option>
                    </select>
                </div>
               
              </div>
              

              
          </div>


          <hr  className='mt-5'/>

          <div className='mt-5 flex justify-end mb-3'>
            <button className='text-sm bg-[#12344d] text-white p-1 px-3 rounded-md hover:bg-blue-600'>Save Landing Page</button>

          </div>

        </div>

      </div>



      <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent}/>
    </>
  )
}

export default CreateLandingPage