'use client'
import Link from "next/link";
import style from './home.module.scss';
import { Card } from 'antd';
// import services from '../../fakeData/services.json';
import { IServices } from "@/interfaces/services.interface";
import { useGetBlogsQuery } from "@/redux/api/BlogApi";
import { IBlog } from "@/types";

const { Meta } = Card;

const Blogs = () => {
  const {data:services,isLoading} = useGetBlogsQuery({limit:4,page:1});
    return (
        <div className={style.serviceContainer}>
            <div className={style.header}>
                <h3>Latest Blogs</h3>
                <Link href={'/blogs'}>View All</Link>
            </div>
            {
              isLoading?"Loading...":(
                <div className={style.content}>
              {
                services?.map((item:IBlog,i:number)=>(
                    <Card
                      key={i}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.image} />}
                    >
                      <Meta title={item.title} description={item.description} />
                    </Card>
                ))
              }
            </div>
              )
            }
        </div>
    );
};

export default Blogs;