import Image from "next/image";
import style from "./home.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Gdsc from "@/components/GDSC/Gdsc";
import Browse from "@/components/Browse/Browse";
import HomeContent from "@/components/HomeContent/HomeContent";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
    <div>
      <Hero/>
      <NavBar />
      <Gdsc/>
      <Image src='/plane.png' alt="" width={631} height={245} className={style.plane}/>
      <Browse/>
      <HomeContent/>
    </div>
  );
}
