import { motion } from "framer-motion";
import CustomButton from "../CustomButton"


const Hero = () => {

  //
  const flyTo = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero_title">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero_subtitle text-gray-400">Dinamizmi her an hissettiren sportif karakteri ve yenilenen estetik iç tasarımıyla yeniden yorumlanan Yeni BMW 5 Serisi, liderlik yolculuğunda ilham vermeye ve sınıfına öncülük etmeye hazır.</p>
        <CustomButton 
        title="Arabaları Keşfet!" 
        designs="mt-10" 
        handleClick={flyTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img 
        initial={{translateX : 300}}
        whileInView={{translateX : 0}}
        transition={{duration : 1.2}}
        src="/hero.png" 
        className="img-fluid object-contain mt-10"/>
      </div>
    </div>
  )
}

export default Hero
