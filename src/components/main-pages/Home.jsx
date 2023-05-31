import Titleto from "../main-page-components/Titleto";
import Carousel from "../main-page-components/Carousel";
import Texts from "../main-page-components/Texts";
import Cards from "../main-page-components/Cards";


function Home({ data }) {

  return (
    <div className="home">
      <Titleto titleto={' Ready for Hiking in nature?'}></Titleto>
      <Carousel carouselData={data['HomeCarouselImages']}></Carousel>
      <Texts texts={data['HomeTexts']}></Texts>

    </div>
  )
}

export default Home;