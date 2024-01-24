import Image from 'next/image'
import style from './home.module.css'
import NavBar from '@/components/NavBar/NavBar'

const imageStyle={
  zIndex: -1,
}


export default function Home() {
  return (
    <div>
      <Image src='/hero.png' alt='' layout='fill' objectFit='cover' objectPosition='top' style={imageStyle}/>
      <NavBar/>
      
    </div >
  )
}
