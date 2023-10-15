'use client'
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { useAppSelector } from '@/redux/reduxHooks';
import { Button, ConfigProvider } from 'antd';


export default function Home() {
  const data = useAppSelector(state=>state.testReducer.value)
  console.log(data);
  
  return (
    <div>
    <Navbar></Navbar>
    content
    <Footer></Footer>
  </div>
  )
}
