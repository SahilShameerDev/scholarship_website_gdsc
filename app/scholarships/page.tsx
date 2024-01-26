

import Header from '@/components/ScholarshipPage/Header/Header'
import Home from '@/components/ScholarshipPage/Home/Home'
import React from 'react'
import style from './scholar.module.css'
import ScholarSections from '@/components/ScholarshipPage/ScholarSections/ScholarSections'
import AllScholarShips from '@/components/ScholarshipPage/AllScholarShips/AllScholarShips'

const page = () => {
  return (
    <div className={style.scholar}>
        <Header/>
        <Home/>
        <ScholarSections title="Open Now"/>
        <ScholarSections title="Upcoming"/>
        <AllScholarShips/>
    </div>
  )
}

export default page