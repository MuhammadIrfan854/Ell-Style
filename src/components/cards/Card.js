import coatImage from "../../assets/coat.jpg";
import coatImage2 from "../../assets/coat2.jpg";
import dressImage from "../../assets/dress.jpg";
import jeansImage from "../../assets/jeans.png";

import './card.css';

function Card() {
  return (
    <div id="card">
      <h1 data-aos="fade-down">Featured Collection</h1>
      <div className="cards">
        <div className="card" data-aos="zoom-in">
          <img src={coatImage} alt="Trench Coat" />
          <h3>Trench Coat</h3>
          <strong>$245</strong>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="100">
          <img src={coatImage2} alt="Ribbed Sweater" />
          <h3>Ribbed Sweater</h3>
          <strong>$95</strong>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="200">
          <img src={dressImage} alt="Pleated Dress" />
          <h3>Pleated Dress</h3>
          <strong>$150</strong>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="300">
          <img src={jeansImage} alt="Wide-Leg Trousers" />
          <h3>Wide-Leg Trousers</h3>
          <strong>$120</strong>
        </div>
      </div>
      <div className="shop-sale" data-aos="fade-up">
        <h1>20% Off Sale</h1>
        <button>Shop Sale</button>
      </div>
    </div>
  );
}

export default Card;
