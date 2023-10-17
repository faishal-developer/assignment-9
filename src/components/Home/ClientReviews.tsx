// components/ClientReviews.js
'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './home.module.scss';
import reviews from '../../fakeData/reviews.json';
import Slider from 'react-slick';


const ClientReviews = () => {
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
  return (
    <section className={style.client_reviews}>
      <h2>Client Reviews</h2>
      <div className={style.review_slider}>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className={style.review_card}>
              <p>{review.review}</p>
              <p className={style.client_name}>- {review.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientReviews;