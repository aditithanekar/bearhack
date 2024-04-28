"use client"
import { RouteKind } from 'next/dist/server/future/route-kind';
import texts from '../../data/Providers';
import { useRouter } from 'next/navigation';

const Provider = ({ title }) => {
  const router = useRouter()
  return (
    <div>
      <div className="flex items-center justify-center pb-5">Select your insurance plan below.</div>
    <div className="flex flex-wrap">
      {texts.map((title, index) => (
          <button 
          onClick={()=>{
            console.log("hi")
            router.push("/map")
          }}
            key={index} 
            className="text-black w-80 h-28 m-7 flex ml-28 text-center items-center justify-center text-2xl font-serif border-black border rounded-3xl bg-white p-2 hover:bg-pink-200"
          >
            {title}
          </button>
      ))}
    </div>
    </div>
  );
};

export default Provider;
