'use client'
import Link from "next/link";
import style from './home.module.scss';
import { Card } from 'antd';
import services from '../../fakeData/services.json';
import { IServices } from "@/interfaces/services.interface";

const { Meta } = Card;

const Services = () => {
    return (
        <div className={style.serviceContainer}>
            <div className={style.header}>
                <h3>Available Services</h3>
                <Link href={'/services'}>View All</Link>
            </div>
            <div className={style.content}>
              {
                services?.map((item:IServices,i)=>(
                    <Card
                      key={i}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.image} />}
                    >
                      <Meta title={item.name} description={item.price+'tk only'} />
                    </Card>
                ))
              }
            </div>
        </div>
    );
};

export default Services;