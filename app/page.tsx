import Image from "next/image";
import style from "./home.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Gdsc from "@/components/GDSC/Gdsc";
import Browse from "@/components/Browse/Browse";


export default function Home() {
  return (
    <div>
      <img src="/hero.png" alt="" className={style.hero} />
      <NavBar />
      <Gdsc/>
      <Image src='/plane.png' alt="" width={631} height={245} className={style.plane}/>
      <Browse/>
    </div>
  );
}
