import Image from "next/image";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
   <div className="container mx-auto p-2" >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2" >
      <div className="bg-blue-500 text-white text-center rounded p-6">test 1</div>
      <div className=" text-white text-center rounded  h-screen">

      {/* <Spline
        scene="https://prod.spline.design/cqOGfTyAbaZzcyXR/scene.splinecode" 
      /> */}
       <Spline
        scene="https://prod.spline.design/thiGgRrQRPeJOaKC/scene.splinecode" 
      />

      </div>
    </div>
    
   </div>
  );
}
