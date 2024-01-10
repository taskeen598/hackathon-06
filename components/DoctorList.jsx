import React from 'react'

const DoctorList = ({ doctor }) => {
    return (
        <div className='flex items-center justify-between bg-gray-100 p-4'>
            <div>{doctor.name}</div>
            <div>{doctor.qualification}</div>
            <div>{doctor.exp}</div>
            <div>{doctor.amount}</div>
            <div className='flex gap-2'>
                <span className='bg-gray-300 rounded cursor-pointer hover:shadow-lg px-3 py-2'>S1</span>
                <span className='bg-gray-400 rounded cursor-pointer hover:shadow-lg px-3 py-2'>S2</span>
                <span className='bg-gray-300 rounded cursor-pointer hover:shadow-lg px-3 py-2'>S3</span>
            </div>

        </div>
    )
}

export default DoctorList