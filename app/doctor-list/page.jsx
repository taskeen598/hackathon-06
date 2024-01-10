/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import DoctorList from '@/components/DoctorList'
import React, { useEffect, useState } from 'react'

function doctorList() {
    const [doctorList, setdoctorList] = useState([]);
    const getAllDoctors = async () => {
        const res = await fetch('/api/register/doctor');
        const data = await res.json();
        setdoctorList(data)
        console.log(data)
    }
    useEffect(() => {
        getAllDoctors()

    }, [])


    return (
        <div className='ml-64 space-y-2 p-3'>
            {doctorList?.Doctors?.map((doc)=>{
                return(
                    <DoctorList key={doc._id} doctor={doc}/>
                )
            })}
        </div>
    )
}

export default doctorList