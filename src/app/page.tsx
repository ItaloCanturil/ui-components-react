import CardImage from "./components/Accordion/components/CardImage";

export default function Home() {
  const imgArr = [{ path: '/01.webp', title: 'Blue Label'}, { path: '/02.jpg', title: 'Blue Label'}, { path: '/03.jpg', title: 'Gold Label'}, { path: '/04.jpg', title: 'Gold Label'}, { path: '/05.jpg', title: 'Gold Label'}]

  
  return (
    <div className="flex justify-center items-center h-screen bg-[#fefae0]">
      <div className="flex items-center gap-2 w-[820px] h-[340px] px-28 hover:px-0">
        {imgArr.map((img, index) => {
          return <CardImage img={img.path} title={img.title} key={index}></CardImage>
        })}
      </div>
    </div>
  );
}
