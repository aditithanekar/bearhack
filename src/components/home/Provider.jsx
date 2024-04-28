"use client"
import { RouteKind } from 'next/dist/server/future/route-kind';
import texts from '../../data/Providers';
import { useRouter } from 'next/navigation';

const Provider = ({ title }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col">
      {texts.map((title, index) => (
          <button 
          onClick={()=>{
            console.log("hi")
            router.push("/map")
          }}

            key={index} 
            className="text-black text-center text-4xl font-serif border-black border-4 rounded-3xl bg-white p-2"
          >
            {title}
          </button>
      ))}
    </div>
  );
};

export default Provider;
