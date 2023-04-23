import React from 'react'
import Heading from '../../Common/Heading'
import Card from '../Card'
import './styles.css'
import CHAKRA from '../../../../assets/Chakra.svg'
import BIGSUN from '../../../../assets/BIGSUN.svg'
import { motion } from 'framer-motion'
import LOVE from '../../../../assets/Love.png'
import MARRIAGE from '../../../../assets/Marriage.png'
import JOB from '../../../../assets/Job.svg'
import MONEY from '../../../../assets/Rupees Coins.svg'
import EDUCATION from '../../../../assets/Global Education.svg'
import HEALTH from '../../../../assets/Medical sign.svg'
import NUMBER from '../../../../assets/Number Block.svg'
import FAMILY from '../../../../assets/Family Care.svg'
import BIRTH from '../../../../assets/Birth.svg'
import ORBIT from '../../../../assets/Orbit.svg'

function ChakraComponent() {

    const solutionData = [
        {
            src: LOVE,
            title: "Love Related Problem"
        },
        {
            src: MARRIAGE,
            title: "Marriage Problem"
        },
        {
            src: JOB,
            title: "Job/Business Problem"
        },
        {
            src: MONEY,
            title: "Money Problem"
        },
        {
            src: EDUCATION,
            title: "Education Problem"
        },
        {
            src: HEALTH,
            title: "Health Problems"
        },
        {
            src: ORBIT,
            title: "Grah Shanti"
        },
        {
            src: BIRTH,
            title: "Child Birth Issues"
        },
        {
            src: FAMILY,
            title: "Husband Wife Problems"
        },
        {
            src: NUMBER,
            title: "Lucky Number"
        },
    ]
  return (
    <div className='mpos-component'>
       <Heading headingTitle='Many Problems One Solution' />
       <div className='mpos-cards-wrapper'>
            <div className='mpos-card-div-first'>
                {solutionData.slice(0,5).map((solution)=>(
                    <Card title={solution.title} src={solution.src} />
                ))}
            </div>
            <div className='mpos-card-div-second'>
                {solutionData.slice(5).map((solution)=>(
                    <Card title={solution.title} src={solution.src} invert="true"/>
                ))}
            </div>
       </div>
       <div className='mpos-outerChakra'>
            <img 
                src={CHAKRA} 
                animate={{rotate:360}}
                transition={{
                    type: "smooth",
                    repeatType: "mirror",
                    duration: 2,
                    repeat: Infinity,
                }}
                alt='chakra' 
                className='mpos-chakra-img'
            />
            <div className='bigsun'>
                <img src={BIGSUN} alt="" className='bigsun-img'/>
            </div>
       </div>
    </div>
  )
}

export default ChakraComponent
