import meter1 from "../assets/img/icons8-general-knowledge-96.png";
import meter2 from "../assets/img/icons8-music.svg";
import meter3 from "../assets/img/icons8-food-and-drink-96.png";
import meter4 from "../assets/img/icons8-geography-100.png";
import meter5 from "../assets/img/icons8-order-history-100.png";
import meter6 from "../assets/img/icons8-retro-tv-100.png";
import meter7 from "../assets/img/icons8-animal-64.png";
import meter8 from "../assets/img/icons8-drawing-64.png";
import meter9 from "../assets/img/icons8-sport-64.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useNavigate } from 'react-router-dom';

export const Categorys = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const navigate = useNavigate()
  const onBackClick = e => {
    e.preventDefault()
    navigate("/login")
  }

  return (
    <section className="category" id="categorys">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Categories</h2>
              <p>Choose question types to solve tricky questions.<br></br> Chọn thể loại câu hỏi để tham giải đố cùng Tùng nhé!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item" onClick={onBackClick}>
                  <img src={meter1} alt="Image" />
                  <h5>General Knowledge Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter2} alt="Image" />
                  <h5>Music Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter3} alt="Image" />
                  <h5>Food & Drinks Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter4} alt="Image" />
                  <h5>Geography Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter5} alt="Image" />
                  <h5>History Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter6} alt="Image" />
                  <h5>Movies & TV Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter7} alt="Image" />
                  <h5>Animals Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter8} alt="Image" />
                  <h5>Art Quiz</h5>
                </div>
                <div className="item" onClick={onBackClick}>
                  <img src={meter9} alt="Image" />
                  <h5>Sports Quiz</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
