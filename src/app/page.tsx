// To Run App: pnpm dev
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
          key='Home'
          href='./profile'
          className='flex h-[48px] w-auto rounded-md mb-1 p-3  text-lg hover:bg-sky-100 hover:text-blue-600'
      >
        <p className="hidden md:block">Home</p>
      </Link> 
    </div>
  );
}
