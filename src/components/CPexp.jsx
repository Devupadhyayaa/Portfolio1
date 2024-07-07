import React from 'react'
import cf from '../assets/CF.png'
import cc from '../assets/CC.png'
import lc from '../assets/LC.png'
import { motion } from "framer-motion"
const CPexp = () => {
  return (
    <div className='border-b border-neutral-700 pb-8 lg:pb-24'>
      <motion.h2
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:1}}
      className='my-20 text-center text-4xl'>Competitve Programming</motion.h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-around">
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration:1.5}}
            className="w-full lg:w-[20%] flex items-center justify-center">
                <img src={cf} alt="" className='rounded-[5%] w-[100%] h-[80%]' />
            </motion.div>
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:100}}
            transition={{duration:1.5}}
            className="w-full lg:w-[60%]">
                <h3 className='text-2xl border-1 my-[5px]'>Specialist at <span className='text-[#d54215]'><a href="https://codeforces.com/profile/Devansh_79">Codeforces</a></span></h3>
                <p className='my-2 py-6 max-w-xl font-light'>
                    More than 70 contest, Max rating of 1478, Solved more than 450 Problems. best Rank 1020 out of 27k participants in Div2 round.
                </p>
            </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-around">
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration:1.5}}
            className="w-full lg:w-[20%] flex items-center justify-center">
                <img src={cc} alt="" className='rounded-[5%] w-[100%] h-[100%] mb-[30px]' />
            </motion.div>
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:100}}
            transition={{duration:1.5}}
            className="w-full lg:w-[60%]">
                <h3 className='text-2xl border-1 my-[5px]'>4 Star at <span className='text-[#d54215]'><a href="https://www.codechef.com/users/devup_02">CodeChef</a></span></h3>
                <p className='my-2 py-6 max-w-xl font-light'>
                    More than 30 contest, Max rating of 1832 (AIR-3435). best Rank 121 in DIV 2 Starters round.
                </p>
            </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-around">
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration:1.5}}
            className="w-full lg:w-[20%] flex items-center justify-center">
                <img src={lc} alt="" className='rounded-[5%] w-[100%] h-[100%] mb-[30px]' />
            </motion.div>
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:100}}
            transition={{duration:1.5}}
            className="w-full lg:w-[60%]">
                <h3 className='text-2xl border-1 my-[5px]'>Knight at <span className='text-[#d54215]'><a href="https://leetcode.com/u/Devansh_79/">LeetCode</a></span></h3>
                <p className='my-2 py-6 max-w-xl font-light'>
                    More than 500 Questions solved, Peak rating of 1931 (Top-3%), best rank 451 out of 30k participants in Biweekly 2024.
                </p>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CPexp