import Header from '@/components/ScholarshipPage/Header/Header'
import Home from '@/components/ScholarshipPage/Home/Home'
import React from 'react'
import style from './scholar.module.css'
import ScholarSections from '@/components/ScholarshipPage/ScholarSections/ScholarSections'

const page = () => {
  return (
    <div className={style.scholar}>
      <div className={style.bg}></div>
        <Header/>
        <Home/>
        <ScholarSections/>
        <ScholarSections/>
    </div>
  )
}

export default page