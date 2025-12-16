import Image from "next/image";
import Door from "@/components/door";
import data from "@/app/data.json"

export default function Home() {



  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-4 bg-black sm:items-start">
        <div className="bg-gray-500 w-full p-2 rounded-lg grid gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-7">
          {data.map((record,idx)=>{
            return(
              <Door key={idx} num={idx + 1} record={record} />
            )
          })}
        </div>
      </main>
    </div>
  );
}
