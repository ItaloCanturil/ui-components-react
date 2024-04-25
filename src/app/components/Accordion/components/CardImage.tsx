import Image from "next/image"
import "../styles/accordion.css"

type CardData = {
  img: string,
  title: string,
}

const CardImage = (props: CardData) => {
  return (
    <div className="rounded-3xl flex flex-end flex-col h-full min-w-20 card cursor-pointer">
      <Image src={props.img} alt={props.title} width={200} height={100} className="background" >
      </Image>
      {/* <img src={props.img} alt={props.title} className="background"/> */}
      <div className="title">{ props.title }</div>
      <div className="backdrop"></div>
    </div>
  )
}

export default CardImage