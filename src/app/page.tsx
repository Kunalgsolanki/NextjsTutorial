
import Link from "next/link";

import Button from "./Button";
export default function Home() {

  return (
    <main>
      <div className="flex flex-col justify-center mt-10">
        <div>
          <h1 className="flex justify-center text-3xl">Next.js Practice</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <h1>Navigation</h1>
        
            {/* <a href="/Deshbord" className="mt-2 text-blue-500 hover:underline">Dashboard</a> */}
            <Link href="/Deshbord">
            <div className="mt-2 text-blue-500 hover:underline">Dashboard</div>
          </Link>
       <Button/>
        </div>
      </div>
    </main>
  );
}
