'use client'
import { HeaderTheme } from "@/components/HeaderTheme";
import { ResultHub } from "@/components/ResultHub";
import { SearchHub } from "@/components/SearchHub";
import { useState } from "react";
import { GitHubUser } from "@/api/DataGitHub";


export default function Home() {

    const [userData, setUserData] = useState<GitHubUser | null>(null);
  return (
    <div className="w-96 h-[777px] flex flex-col items-center bg-slate-50 md:w-[768px] md:h-[1024px]">
      <HeaderTheme />    
      <SearchHub onSearch={setUserData}/>
      {userData && <ResultHub user={userData} />}
   </div>
  );
}
