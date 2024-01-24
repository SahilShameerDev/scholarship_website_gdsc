import Image from "next/image";
import style from "./home.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Gdsc from "@/components/GDSC/Gdsc";

const imageStyle = {
  zIndex: -2,
};

export default function Home() {
  return (
    <div>
      <img src="/hero.png" alt="" className={style.hero} />
      <NavBar />
      <Gdsc/>
    </div>
  );
}
