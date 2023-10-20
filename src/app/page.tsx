'use client'
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { useAppSelector } from '@/redux/reduxHooks';
import { Button, ConfigProvider } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  const router=useRouter();
  const data = useAppSelector(state=>state.testReducer.value)
  console.log(data);
  useEffect(()=>{router.push('/home')},[])
  return (
  <></>  
  )
}
