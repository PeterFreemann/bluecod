import Advert from "@/component/Advert";
import Header from "../component/header";
import UnderHeader from "../component/UnderHeader";
import Editor from "../component/Editor";
import Trending from "../component/Trending";
import Episodes from "../component/Episodes";
import Categories from "@/component/Categories";
import Educational from "@/component/Educational";
import Entertainment from "@/component/Entertainment";
import Tech from "@/component/Tech";
import Prodcast from "@/component/Prodcast";
import GetUpdates from "@/component/GetUpdates";
import Partners from "@/component/Partners";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div className="">
     <div className="text-5xl text-center">
      <Header />
      
      <UnderHeader/>
      <Advert />
      <Editor />
      <Trending />
      <Episodes />
      <Categories />
      <Educational/>
      <Entertainment/>
      <Tech/>
      <Prodcast/>
      <GetUpdates/>
      <Partners/>
      <Footer/>
     </div>
     
    </div>
  );
}



