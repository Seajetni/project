import axios from "axios"
import {Nav} from "../components/nav"
import {Layout} from "../components/Layout"
import { useState } from "react";

export async function getStaticProps() {
  // Fetch data from an API
  const res = await fetch('https://api-kup.vercel.app/api/product/653122d5cc7450b0554ca810');
  const data = await res.json();

  // Return the data as props
  return {
    props: {
      data,
    },
  };
}

export default function Home(props : any) {

  const [on,setOn] = useState("ปั้มน้ำเปิดอยู่")
  const res:string = props.data.data.name
  console.log(res)

  function Open(){
    setOn("ปั้มน้ำเปิดอยู่")
  }
  function Off (){
    setOn("ปั้มน้ำปิดอยู่")
  }

  return (
    <>
      <div className=" w-screen h-screen bg-black  flex p-1">

        <nav className="  bg-blue-800  w-1/6 rounded-s-xl text-white">
          <Nav/>
        </nav>

        <Layout >

          <div className="flex flex-col text-center bg-green-700 rounded-full">
            <label>ค่า PH ตอนนี้</label>
            <p>{res}</p>
          </div>



          <div className="bg-yellow-400 rounded-2xl text-center">
            <label htmlFor="">สถานะตอนนี้</label>
            <p>กำลังผสมปุ๋ย</p>
          </div>


          <div className="bg-yellow-100 rounded-2xl text-center">
            <label htmlFor="">สถานะตอนนี้</label>
            <p>{on}</p>
          </div>

          <div className="flex justify-center m-2">
            <button className=" rounded-full bg-blue-700 p-2 mr-4" onClick={Open}>on</button>
            <button className="rounded-full bg-red-700 p-2" onClick={Off}>off</button>
          </div>


        </Layout>

  </div>
   </>
  )
}


