import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen  text-gray-300'>
            <div className=' flex flex-col justify-center items-center w-full h-full '>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm: text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I am Zia, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>Web developers usually fall under one of three categories:
                            back-end developers, front-end developers, and full-stack developers.
                            Some web developers also work as webmasters. Let's take a closer look at each of these roles.
                            Back-end web developers create the website's structure, write code,
                            and verify the code works.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
