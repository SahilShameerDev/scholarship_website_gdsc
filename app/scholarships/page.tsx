import Header from '@/components/ScholarshipPage/Header/Header'
import Home from '@/components/ScholarshipPage/Home/Home'
import React from 'react'
import style from './scholar.module.css'

const page = () => {
  return (
    <div className={style.scholar}>
        <Header/>
        <Home/>
    </div>
  )
}

export default page