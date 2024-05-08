import {useEffect, useState} from 'react'
import Logo from '../../../public/assets/Logo.png'
import { FaCheckCircle } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';

const ValidSubmit = () => {
    const navigate=useNavigate();

    const [time,setTime]=useState(5);

    useEffect(() => {
        const countDown=setInterval(() => {
            if(time===1){
                navigate('/')
            }
            setTime(time-1)
        }, 1000);
        return () => {
            clearInterval(countDown)
        }
    }, [time])

    return (
        <section className="flex flex-col md:gap-40 gap-20 ">
            <div className="">
                <img src={Logo} alt="logo" className="md:w-28 w-20" />
            </div>
            <div className='flex flex-col gap-10 text-center md:w-1/3 mx-auto '>
                <FaCheckCircle className='text-4xl text-green mx-auto '/>
                <div className='flex-col flex gap-5'>
                    <p className='grace-style'>Success Submitted</p>
                    <p className='text-4xl font-semibold'>Congratulations</p>
                    <p className='text-shade1 text-lg'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
                </div>
            </div>
            <div className=" w-full flex-row-center justify-center text-center">
                <p>Redirecting you to Homepage in <b>{time} Seconds</b></p>
            </div>
        </section>
    )
}

export default ValidSubmit