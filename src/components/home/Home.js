import HomeImage from "../../assets/home-image.png";
import "./home.css";

function Home() {
  return (
    <div id="home">
      <div id="home-page">
        <div className="left" data-aos="fade-right">
          <h1>Women's Clothing</h1>
          <p>
            Discover the perfect blend of elegance and comfort. At Elle'Style, we
            bring you handpicked fashion for every occasion — from everyday
            essentials to bold statement pieces. Shop the latest trends in women’s
            clothing and express your style with confidence.
          </p>
          <button>Shop Now</button>
        </div>
        <div className="right" data-aos="fade-left">
          <img src={HomeImage} alt="Fashion Model" />
        </div>
      </div>
    </div>
  );
}

export default Home;
