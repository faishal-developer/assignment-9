// components/ClientReviews.js
'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './home.module.scss';
import Slider from 'react-slick';
// import reviews from '../../fakeData/reviews.json'
import { useGetFaqsQuery } from '@/redux/api/faqApi';
import { IFaq } from '@/types';


const ClientReviews = () => {
  const {data:reviews,isLoading} = useGetFaqsQuery({page:1,limit:10});
  console.log("clientReview",reviews);
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
          {reviews?.map((review:any) => (
            <div key={review?._id} className={style.review_card}>
              <p>{review?.question}</p>
              <p className={style.client_name}>- {review?.userId?.name}</p>
            </div>
          ))}
        </Slider>
        
      </div>
    </section>
  );
};

export default ClientReviews;