"use client";
import Image from "next/image";
import { fetchGitHubUser, GitHubUser } from "@/api/DataGitHub";
import { useState } from "react";

type Props = {
  onSearch: (user: GitHubUser | null) => void;
  setError: (err: boolean) => void;
  error: boolean;
};

export function SearchHub({ onSearch, setError, error }: Props) {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    if (!username.trim()) return;

    const data = await fetchGitHubUser(username);
    if (data) {
      onSearch(data);
      setError(false);
    } else {
      onSearch(null);
      setError(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (error) setError(false);
  };

  return (
    <div className="flex items-center w-80 h-14 bg-white dark:bg-slate-800 text-slate-800 dark:text-white md:w-[573px] md:h-16 rounded-2xl shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)]">

      <Image
        src={"/assets/icon-search.svg"}
        alt="Icon search"
        height={20}
        width={20}
        className="object-contain ml-4"  
      />

      <input
        type="text"
        placeholder="Search GitHub username…"
        value={username}
        onChange={handleInputChange}
        className={`flex-1 bg-transparent outline-none text-sm placeholder:text-slate-400 ml-4 mr-2 ${
          error ? " placeholder:text-red-500" : "text-slate-800 dark:text-white"
        }`}
      />

      {error && (
        <p className="text-red-500 text-xs font-bold whitespace-nowrap mr-2">
          No results
        </p>
      )}

      <button
        onClick={handleSearch}
        className="w-20 h-11 bg-blue-600 hover:bg-blue-700 transition rounded-[10px] text-white text-sm font-bold mr-[7px]"
      >
        Search
      </button>
    </div>
  );
}
