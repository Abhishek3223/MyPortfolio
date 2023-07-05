import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Background from "./Background";
import Type from "./TypeWrit";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen `}>
      <div className={`absolute inset-0 top-[300px] gap-3 max-w-7xl mx-auto ${styles.paddingX} flex lg:flex-row justify-center items-center h-1/3 flex-col-reverse `}>

        <div className="mr-3" >
          <h1 className="text-[30px]">
            <span style={{ 'color': "blue" }}>#</span> hello World
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Abhishek </span>
            <span className='md:hidden text-[#915EFF]'>ranjan </span>
          </h1>
          <p style={{ whiteSpace: "nowrap" }} className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span > <Type className="text-[40px]" str={["Web Developer", "Freelancer", "ReactNative Developer"]} /></span>
          </p>
          <div></div>
        </div>
        <div className="flex justify-start lg:justify-center item-center border-2 flex-center w-40 h-40 rounded-full bg-primary border-red">
          <img className="w-full rounded-full" src="/abhishek.jpg" alt="" />
        </div>


      </div>

      {/* <ComputersCanvas /> */}
      {/* <BackGround /> */}
      <Background />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
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
      </div>
    </section>
  );
};

export default Hero;
