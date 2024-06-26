import React from 'react'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import javascript from '../Assets/javascript.png'
import react from '../Assets/react.png'
import node from '../Assets/node.png'
import github from '../Assets/github.png'
import mongo from '../Assets/mongo.png'
import aws from '../Assets/aws.png'

const Skills = () => {
    return (
        <div name='skills' className=' text-gray-300 h-screen'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies i have work with</p>
                </div>
                {/* skills icons section */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={html} alt='html icon' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={css} alt='html icon' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={javascript} alt='html icon' />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={react} alt='html icon' />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={node} alt='html icon' />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={github} alt='html icon' />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={mongo} alt='html icon' />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='flex flex-col justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={aws} alt='html icon' />
                        <p className='my-4'>AWS</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
