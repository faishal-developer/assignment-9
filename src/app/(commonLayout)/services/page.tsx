'use client';
import React, { useState } from 'react';
import style from './services.module.scss';
// import services from '../../../fakeData/services.json'
import { Card } from 'antd';
import { IServices } from '@/interfaces/services.interface';
import Meta from 'antd/es/card/Meta';
import CustomPagination from '@/components/Pagination/Pagination';
import { useGetServicesQuery } from '@/redux/api/serviceApi';
import { useRouter } from 'next/navigation';

const ServicesPage = () => {
  const router=useRouter();
  const [page,setPage]=useState<number>(1);
  const [limit,setLimit]=useState<number>(24);
  const [searchTerm,setSearchTerm]=useState<string>('')
  const {data:services,isLoading} = useGetServicesQuery({page,limit,searchTerm})
    return (
        <div className={style.services}>
            <div className={style.search}>
                <input name='searchTerm' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button>Search</button>
            </div>
            <div className={style.content}>
              {
                services?.map((item:any,i:number)=>(
                    <Card
                      key={i}
                      hoverable
                      onClick={()=>router.push(`/services/${item._id}`)}
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.image} />}
                    >
                      <Meta title={item.name} description={item.price+'tk only'} />
                    </Card>
                ))
              }
              
            </div>
            {/* <div className={style.pagination}>
                <CustomPagination page={page} total={Math.ceil(services?.meta?.total/limit)} handlePageClick={(...data:any)=>{setPage(data[0].selected+1)}} />
            </div> */}
        </div>
    );
};

export default ServicesPage;