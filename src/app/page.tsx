"use client";
import { useState } from "react";
import { GitHubUser } from "@/api/DataGitHub";
import { HeaderTheme } from "@/components/HeaderTheme";
import { SearchHub } from "@/components/SearchHub";
import { ResultHub } from "@/components/ResultHub";

export default function Home() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState(false);

  return (
    <div className="w-96 h-[777px] flex flex-col items-center bg-slate-50 md:w-[768px] md:h-[1024px]">
      <HeaderTheme />
      <SearchHub onSearch={setUserData} error={error} setError={setError} />
      {userData && !error && <ResultHub user={userData} />}
    </div>
  );
}
