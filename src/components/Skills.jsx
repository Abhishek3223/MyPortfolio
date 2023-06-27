
import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { styles } from "../styles";
// import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies, toolsUsed } from "../constants";

const Skill = () => (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>Fav. tech</p>
            <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
        </motion.div>

        <div className='w-full flex mb-3'>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
            </motion.p>
        </div>
        <div className="grid items-center justify-center gap-8  h-full px-4 py-8 mx-auto rounded-lg shadow-md  md:px-6 md:py-12 md:flex-row bg-tertiary rounded-[20px]">
            {/* <TypingText title="| My Skills" /> */}
            <div className="flex flex-col gap-4 items-center justify-center w-full w-full max-w-lg h-full mb-4 md:mb-0 h-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <motion.div
                        variants={fadeIn("left", "tween", 0.1, 1)}
                        className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-center text-secondary-white"
                    >
                        <h2 className="text-2xl p-4 font-semibold text-center text-white md:text-3xl">
                            Technical Skills
                        </h2>
                    </motion.div>
                </motion.div>
                <div className="flex gap-14 flex-wrap justify-center mt-4 ">
                    {technologies.map((technology, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-12 h-12 rounded-full text-white "
                        >
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }}
                                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                            >
                                <motion.div
                                    variants={fadeIn("up", "tween", 0.2, 1)}
                                    className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-center text-secondary-white"
                                >
                                    <div className="flex flex-col hover:scale-105 transition duration-200 p-1 items-center justify-center">
                                        <div className="mt-3">
                                            <technology.icon size="35px" />
                                        </div>
                                        <p className=" p-2 text-sm mb-2 w-max">{technology.name}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 max-w-lg w-full h-full mb-4 md:mb-0 mt-4 items-center justify-center w-full h-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <motion.div
                        variants={fadeIn("right", "tween", 0.1, 1)}
                        className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-center text-secondary-white"
                    >
                        <h2 className="text-2xl p-4 font-semibold text-center text-white md:text-3xl">
                            Tools I use
                        </h2>
                    </motion.div>
                </motion.div>
                <div className="flex gap-16 flex-wrap justify-center mt-4 ">
                    {toolsUsed.map((technology, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-12 h-12 rounded-full text-white "
                        >
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }}
                                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                            >
                                <motion.div
                                    variants={fadeIn("up", "tween", 0.2, 1)}
                                    className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-center text-secondary-white"
                                >
                                    <div className="flex flex-col hover:scale-105 transition duration-200 p-1 items-center justify-center">
                                        <div className="mt-3">
                                            <technology.icon size="35px" />
                                        </div>
                                        <p className=" p-2 text-sm mb-2 w-max">{technology.name}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* <div className=' bottom-32 w-full flex justify-center items-center'>
            <a href='#project'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                    />
                </div>
            </a>
        </div> */}
    </>
);

// export default ;
export default SectionWrapper(Skill, "");
