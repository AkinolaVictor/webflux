import Footer from "@/registry/locals/Footer";
import EachCard from "@/registry/locals/home/EachCard";
import HomeDescription from "@/registry/locals/home/HomeDescription";
import TopHeader from "@/registry/locals/home/TopHeader";
import { pad_x } from "@/utils/helper";
import Head from "next/head";


export default function Home() {
  return (
    <div
      style={{background: "black"}}
      className={`flex flex-col min-h-screen items-center justify-start bg-zinc-50 font-sans dark:bg-black`}
    >
      <Head>
          <title>Webflux || Home</title>
          <meta name="description" content="The webflux homepage" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopHeader />
      <HomeDescription />

      <div className={`flex gap-6 flex-wrap justify-center items-center ${pad_x}`}>
        {
          [1,2,3].map((item, index)=>{
            return (
              <EachCard 
                key={index}
                title="Text Animations"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi aperiam molestias ratione. "
              />
            )
          })
        }
      </div>

      <Footer />
    </div>
  );
}
