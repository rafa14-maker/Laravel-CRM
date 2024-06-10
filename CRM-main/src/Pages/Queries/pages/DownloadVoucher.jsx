import React from 'react';
import voucherBg from "../../../assets/images/voucherbg.png";
import voucherLogo from "../../../assets/images/voucherfooter.png";
import { useParams } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";

const DownloadVoucher = () => {
    // const params = useParams();
    // console.log(params);

    return (
        <>
            <div style={{
                backgroundImage: `url(${voucherBg})`,
                height: '100%',
                width: '100%',
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative'  // Ensure the parent has relative positioning,
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100vh',
                    backgroundImage: `url(${voucherLogo})`,
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom',
                    zIndex: 0
                }} className='flex items-center justify-center'>
                    <div className='absolute bottom-[10rem]'>
                        <div className='flex flex-col items-center'>
                            <div className='p-2 bg-[#ffffffb0] rounded-md'>
                                <img src={logo} className='h-[40px] relative' alt="" />
                            </div>
                            <p className='text-xl font-semibold mt-5'>Travbizz Travel IT Solutions</p>
                            <p className='text-xs mt-2 text-center'><span className='font-semibold'>Address:</span> New Delhi  |  <span className='font-semibold'>Phone:</span> 1234567890  |  <span className='font-semibold'>Email:</span> info@travbizz.com</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-[#09488b] font-semibold text-lg text-center pt-8'>Activity Voucher</h2>
                <h2 className='text-[#09488b] font-semibold text-3xl text-center pt-3'>Amazing Dubai Tour Mr. Abhishek Ji</h2>
                
                <div className='flex justify-center mt-7 w-full ' style={{ zIndex: 2 , position: "absolute"}}>
                    <div className='overflow-x-auto mx-5'>
                        <table className='w-[1000px]  shadow-md'>
                            <thead>
                                <tr className='w-full bg-[#ff9933]'>
                                    <th className='p-2 font-semibold text-sm text-white'>Date</th>
                                    <th className='p-2 font-semibold text-sm text-white'>Name</th>
                                    <th className='p-2 font-semibold text-sm text-white'>Time</th>
                                    <th className='p-2 font-semibold text-sm text-white'>End Time</th>
                                    <th className='p-2 font-semibold text-sm text-white'>Adult</th>
                                    <th className='p-2 font-semibold text-sm text-white'>Child</th>
                                    <th className='p-2 font-semibold text-sm text-white'>Confirmation No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-white border-y-[1px]'>
                                    <td className='text-center p-2 font-semibold text-sm'>07-Jul-2024</td>
                                    <td className='text-center p-2 text-sm'>Kite Beach</td>
                                    <td className='text-center p-2 text-sm'>01:00 PM</td>
                                    <td className='text-center p-2 text-sm'>02:00 PM</td>
                                    <td className='text-center p-2 text-sm'>2</td>
                                    <td className='text-center p-2 text-sm'>0</td>
                                    <td className='text-center p-2 text-sm'></td>
                                </tr>
                                <tr className='bg-white border-y-[1px]'>
                                    <td className='text-center p-2 font-semibold text-sm'>06-Jul-2024</td>
                                    <td className='text-center p-2 text-sm'>Dubai Desert Safari</td>
                                    <td className='text-center p-2 text-sm'>01:00 PM</td>
                                    <td className='text-center p-2 text-sm'>02:00 PM</td>
                                    <td className='text-center p-2 text-sm'>2</td>
                                    <td className='text-center p-2 text-sm'>0</td>
                                    <td className='text-center p-2 text-sm'></td>
                                </tr>
                                <tr className='bg-white border-y-[1px]'>
                                    <td className='text-center p-2 font-semibold text-sm'>07-Jul-2024</td>
                                    <td className='text-center p-2 text-sm'>Dubai Museum</td>
                                    <td className='text-center p-2 text-sm'>01:00 PM</td>
                                    <td className='text-center p-2 text-sm'>02:00 PM</td>
                                    <td className='text-center p-2 text-sm'>2</td>
                                    <td className='text-center p-2 text-sm'>0</td>
                                    <td className='text-center p-2 text-sm'></td>
                                </tr>
                                <tr className='bg-white border-y-[1px]'>
                                    <td className='text-center p-2 font-semibold text-sm'>07-Jul-2024</td>
                                    <td className='text-center p-2 text-sm'>Dubai Museum</td>
                                    <td className='text-center p-2 text-sm'>01:00 PM</td>
                                    <td className='text-center p-2 text-sm'>02:00 PM</td>
                                    <td className='text-center p-2 text-sm'>2</td>
                                    <td className='text-center p-2 text-sm'>0</td>
                                    <td className='text-center p-2 text-sm'></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DownloadVoucher;
