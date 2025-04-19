import Link from "next/link";
import Image from "next/image";
import next from "@/public/assets/nextlogo.svg"
import Logo from "@/assets/logo"
export default function Home() {


const courses = [
  {
    "href": "/gettingstarted",
    "label": "next level web developement",
    "des":"Next Level Web Developement",
    "color": "text-gray-300"

  }
]
  
  return (
    <div className=" h-full w-full z-50  fixed top-0 bottom-0 flex items-center justify-center bg-gray-900  text-white">
     
      <div className="space-y-4 text-center items-center flex flex-col">
 <div  className=" flex flex-col items-center">
<div className=" h-32 rounded-full overflow-hidden relative">
{/* <Image alt="logo" width={100000} height={10000} className="  w-96"  src={logo}></Image> */}
<Logo className='  w-32 bg-white'/>

</div>
  <h1  className=" text-2xl font-semibold">
   course docs
  </h1>
 </div>
        {courses.map((course) => (
         <Link href={course.href}    key={course.slug} className=" rounded-xl flex items-center justify-center  bg-[#0D0E1F]">
          <Image alt="next" width={100000} height={10000} className=" w-20 p-3"  src={next}>

          </Image>
           <div

className={`${course.color} text-xl font-bold bg-gradient-to-r  from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:underline  p-3.5 ps-0 rounded-lg  hover:bg-white transition-all duration-300 inline-block`}

 

>
 {course.des}
</div>
         </Link>
        ))}
      </div>
    </div>
  );
}
