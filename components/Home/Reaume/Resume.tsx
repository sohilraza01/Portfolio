import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* Work Part */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">My Work <span className='text-cyan-200'>Experience</span></h1>
                <div className="mt-10">
                    <ResumeCard Icon={FaCodepen} role='Full-Stack Developer' />
                    <ResumeCard Icon={FaReact} role='Front-End Developer' />
                    <ResumeCard Icon={BsDatabase} role='Back-End Developer' />
                </div>
            </div>
            {/* Education Part */}
            <div className="">
                 <h1 className="text-3xl sm:text-4xl font-bold text-white">My <span className='text-cyan-200'>Education</span></h1>
                 <div className="mt-10">
                    <ResumeCard Icon={BiBadge} role='MIT Group of Institution' date='Sep 2021 - May 2025' />
                    <ResumeCard Icon={FaReact} role='Computer Science' date='Jan 2021 - Dec 2025' />
                    <ResumeCard Icon={BsDatabase} role='Certicifate in Full Stack Developer' date='Jan 2023 - Dec 2025' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
