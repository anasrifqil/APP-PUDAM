import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('@/component/Sidebar'));
const Header = dynamic(() => import('@/component/Header'));
const ListSuratMasuk = dynamic(() => import('@/component/ListSuratMasuk'));
const Footer = dynamic(() => import('@/component/Footer'));
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import SessionTimeout from '@/component/Auth/SessionTimeout';
function suratmasuk () {

  const router = useRouter();
  const token = Cookies.get('token');
  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/'); // Redirect ke halaman login saat logout
  };
  useEffect(() => {
    if (!token) {
      router.push('/'); 
    }
  }, []);

  return (
    <>
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header />
        <ListSuratMasuk/>
        <Footer/>
      </div>
    </div>
    <SessionTimeout maxInactiveTime={10 * 60 * 1000} logoutCallback={handleLogout} />
    </>

  );
};

export default suratmasuk;
