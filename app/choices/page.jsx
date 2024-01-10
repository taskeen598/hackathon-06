import Link from 'next/link';
import React from 'react'
import { FaHandHoldingMedical } from "react-icons/fa";

const choices = () => {
    return (
        <div className='w-1/2 m-auto h-screen grid grid-cols-1 sm:grid-cols-2 place-items-center'>
            <Link href={"/doctor"}>
                <div className='w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] xl:h-[300px] xl:w-[300px] bg-gray-700 rounded-full flex justify-center space-y-3 items-center flex-col hover:shadow-xl cursor-pointer'>
                    <FaHandHoldingMedical className='text-5xl text-white' />
                    <p className='text-base text-white'>I am Doctor</p>
                </div>
            </Link>
            <Link href={"/patient"}>
                <div className='w-[100px] h-[100px] lg:h-[200px] lg:w-[200px] xl:h-[300px] xl:w-[300px] bg-gray-700 rounded-full flex justify-center items-center flex-col hover:shadow-xl cursor-pointer space-y-3'>
                    <FaHandHoldingMedical className='text-5xl text-white' />
                    <p className='text-base text-white'>I am Patient</p>
                </div>
            </Link>
        </div>
    )
}

export default choices