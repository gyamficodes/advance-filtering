import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
const Product = () => {
  return (
    <>
      <section className="card-container">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg"
            alt="Card-image"
          />
          <div className=" card-details">
            <h1 className="card-titile">Shoe</h1>
            <div className="card-reviews">
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="total-reviews">4</span>
            </div>
            <div className="card-price">
              <div className="price">
              <del>$300</del>200
              </div>
              <div className="bag"><BsBagHeartFill /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
