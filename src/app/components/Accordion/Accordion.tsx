import CardImage from "./components/CardImage"

const Accordion = () => {
  const imgArr = [{ path: '/blue-label.jpg', title: 'Blue Label'}, { path: '/second-blue.jpg', title: 'Blue Label'}, { path: '/gold-label.jpeg', title: 'Gold Label'}]

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-96 flex items-center gap-3 h-fit">
        {imgArr.map((img, index) => {
          return <CardImage img={img.path} title={img.title} key={index}></CardImage>
        })}
      </div>
    </div>
  )
}

export default Accordion