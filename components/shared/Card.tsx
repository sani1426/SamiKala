import Image from "next/image"




const Card = ({src , title}: {src:string , title:string}) => {
  return (
    <div className="relative w-full h-full">
        <Image src="" fill alt="hero-carousel" />
        <h2 className="absolute text-xl text-right pr-4 top-1/2">پوشا مردانه</h2>
    </div>
  )
}

export default Card