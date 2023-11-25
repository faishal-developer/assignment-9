'use client'
import Link from "next/link";
import style from './home.module.scss';
import { Card } from 'antd';
import { IServices } from "@/interfaces/services.interface";
import { useGetServicesQuery } from "@/redux/api/serviceApi";

const { Meta } = Card;

const Services = () => {
  const {data:services,isLoading} = useGetServicesQuery({limit:4,page:1});
  console.log("data",services)

    return (
        <div className={style.serviceContainer}>
            <div className={style.header}>
                <h3>Available Services</h3>
                <Link href={'/services'}>View All</Link>
            </div>
            {isLoading?'Loading...':(
              <div className={style.content}>
              {
                services?.map((item:any,i:number)=>(
                    <Link
                      key={i}
                      href={`/services/${item._id}`}
                    >
                      <Card
                      key={i}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.image} />}
                    >
                      <Meta title={item.name} description={item.price+'tk only'} />
                    </Card>
                    </Link>
                ))
              }
            </div>
            )}
        </div>
    );
};

export default Services;