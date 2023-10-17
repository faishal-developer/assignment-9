'use client';
import React from 'react';
import style from './services.module.scss';
import services from '../../../fakeData/services.json'
import { Card } from 'antd';
import { IServices } from '@/interfaces/services.interface';
import Meta from 'antd/es/card/Meta';
import CustomPagination from '@/components/Pagination/Pagination';

const ServicesPage = () => {
    return (
        <div className={style.services}>
            <div className={style.search}>
                <input/>
                <button>Search</button>
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
            <div className={style.pagination}>
                <CustomPagination page={1} total={10} handlePageClick={(...data)=>{console.log(data)}} />
            </div>
        </div>
    );
};

export default ServicesPage;