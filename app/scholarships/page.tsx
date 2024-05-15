

import Header from '@/components/ScholarshipPage/Header/Header'
import Home from '@/components/ScholarshipPage/Home/Home'
import React from 'react'
import style from './scholar.module.css'
import ScholarSections from '@/components/ScholarshipPage/ScholarSections/ScholarSections'
import AllScholarShips from '@/components/ScholarshipPage/AllScholarShips/AllScholarShips'
import data from './scholarship.json';


const page = () => {

  const openNowScholarships = data.scholarships.filter(scholarship => scholarship.status === 'open now');
  const upcomingScholarships = data.scholarships.filter(scholarship => scholarship.status === 'upcoming');



  return (
    <div className={style.scholar}>
        <Header/>
        <Home/>
        <ScholarSections scholarships={openNowScholarships} title="Open Now"/>

        <AllScholarShips scholarships={data.scholarships}/>
    </div>
  )
}

export default page