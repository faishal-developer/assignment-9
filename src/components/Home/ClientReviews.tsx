// components/ClientReviews.js
'use client'

import style from './home.module.scss';
// import reviews from '../../fakeData/reviews.json'
import { useGetFaqsQuery } from '@/redux/api/faqApi';
import { IFaq } from '@/types';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './utils';


const ClientReviews = () => {
  const {data:reviews,isLoading} = useGetFaqsQuery({page:1,limit:10});
   
  return (
    <section className={style.client_reviews}>
      <h2>Client Reviews</h2>
      <div className={style.review_slider}>
          {
            reviews?.length>1 &&(
              <Carousel responsive={responsive}>
                {reviews?.map((review:any) => (
                  <div key={review?._id} className={style.review_card}>
                    <p>{review?.question}</p>
                    <p className={style.client_name}>- {review?.userId?.name}</p>
                  </div>
                ))}
              </Carousel>
            )
          }
        
      </div>
    </section>
  );
};

export default ClientReviews;