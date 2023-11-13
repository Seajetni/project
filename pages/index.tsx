
import { useEffect, useState } from "react";
import {Layout} from "../components/Layout"


export async function getStaticProps() {
  // Fetch data from an API
  const res = await fetch('https://api-kup.vercel.app/api/product/6551a3d4bd6eeffe50f8d24f');
  const data = await res.json();

  // Return the data as props
  return {
    props: {
      data,
    },
  };
}

export default function Home(props: any) {
  const [pH, setPH] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api-kup.vercel.app/api/product/6551a3d4bd6eeffe50f8d24f');
        const data = await res.json();
        const newPH = parseFloat(data.data.value).toFixed(2);
        const pH: any = newPH
        setPH(pH);
      } catch (error) {
        console.error('Error fetching pH data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

  }, []); // Empty dependency array to run the effect only once on mount

  const roundedNumber = parseFloat(pH).toFixed(2);

  return (
    <>

<div
      className="bg-local bg-cover"
      // style={{
      //   backgroundImage: `url('https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      // }}
    >

    <Layout>
      
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <div className=" flex flex-wrap items-center justify-center ">
      <div className="flex-shrink-0 m-5 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}
        >
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center h-52">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}
          ></div>
          <img
            className="relative w-40"
            src="/PH.png"
            alt=""
            />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">PH value</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">ค่า PH ปกติอยู่</span>
            <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{pH}</span>
          </div>
        </div>
      </div>
      
    </div>

    <div className=" flex flex-wrap items-center justify-center">
      <div className="flex-shrink-0 m-5 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}
        >
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}
          ></div>
          <img
            className="relative w-40"
            src="/favicon.ico"
            alt=""
            />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Pump</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Working</span>
            <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">กำลังปั้มน้ำ</span>
          </div>
        </div>
      </div>
      
    </div>

    <div className=" flex flex-wrap items-center justify-center">
      <div className="flex-shrink-0 m-5 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}
        >
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}
          ></div>
          <img
            className="relative w-40"
            src="/Fertilizer.png"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Fertilizer</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Valve</span>
            <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">OFF</span>
          </div>
        </div>
      </div>
      
    </div>
    </div>

      


    </Layout>
    </div>

   </>
  )
}


