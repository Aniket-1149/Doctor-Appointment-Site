import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ----------------Left Side------------- */}
            <div>
                <img className='mb-5 w-40'src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore voluptates, incidunt non ipsam officia. Eius magnam iste cumque, tenetur voluptas veniam minus cupiditate nemo sunt neque exercitationem ratione labore quis aperiam deserunt delectus.</p>

                
            </div>


            {/* ----------------Center Side------------- */}
            <div >
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>


            </div>


            {/* ----------------Right Side------------- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>3562546546456</li>
                    <li>shdgfhsgf@1313</li>
                </ul>


            </div>



        </div>
        {/* -----------------Copyrigth Text------------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto-All Right Reserved</p>

        </div>
      
    </div>
  )
}

export default Footer
