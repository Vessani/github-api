'use client'
import Image from "next/image";
import { fetchGitHubUser,GitHubUser } from "@/api/DataGitHub";
import { useState } from "react";


type Props = {
  onSearch: (user: GitHubUser | null) => void;
};

export function SearchHub({onSearch}:Props) {
  const [username, setUsername] = useState("");
  


  const handleSearch = async () => {
    if (!username.trim()) return;
    const data = await fetchGitHubUser(username);
    onSearch(data);
  };

  return (
    <div className="flex flex-row ml-6 mr-6 mt-9 items-center justify-between w-80 h-14 bg-white rounded-2xl shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)] md:w-[573px] md:h-16">
      <Image
        src={"/assets/icon-search.svg"}
        alt="Icon search"
        height={20}
        width={20}
        className="object-contain ml-4"
      />
      <input
        type="text"
        placeholder="Search GitHub username..."
        className="text-slate-500 text-xs font-normal leading-normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button
        className="w-20 h-11 bg-blue-600 rounded-[10px] shadow-[0px_16px_30px_-10px_rgba(70,88,109,0.20)] flex items-center justify-center"
        onClick={handleSearch}
      >
        <p className="text-center text-white text-sm font-bold">Search</p>
      </button>

    </div>
    
  );
}
