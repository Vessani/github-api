import { GitHubUser } from "@/api/DataGitHub";
import Image from "next/image";

type InfoItem = {
  icon: string;
  alt: string;
  value: string;
};

type statsItem = {
  label: string;
  value: number;
};

type Props = {
  user: GitHubUser;
};

export function ResultHub({user}:Props) {
 

  const stats: statsItem[] = [
    { label: "Repos", value: user.public_repos },
    { label: "Followers", value: user.followers },
    { label: "Following", value: user.following },
  ];

  const infos: InfoItem[] = [
    {
      icon: "/assets/icon-location.svg",
      alt: "Location",
      value: user.location ? ` @${user.location}` : "Not Available",
    },
    {
      icon: "/assets/icon-website.svg",
      alt: "Website",
      value: user.blog ? `@${user.blog}` : "Not Available"
    },
    {
      icon: "/assets/icon-twitter.svg",
      alt: "Twitter",
      value: user.twitter_username ? `@${user.twitter_username}` : "Not Available" ,
    },
    {
      icon: "/assets/icon-company.svg",
      alt: "Company",
      value: user.company ? `@${user.company}` : "Not Available"
    },
    
  ];

  return (
    <div className="w-80 h-[517px] mt-4 bg-white rounded-2xl shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)] flex flex-col md:w-[573px] md:h-[481px]">
      {/*FIXME: HEADER */}
      <div className="flex ml-6 mt-8 mr-[70px] gap-[19px] md: w-80 md:h-28">
        <div>
          <Image
            src={user.avatar_url}
            alt={user.name} 
            width={117}
            height={117}
            className="object-contain rounded-full"
          />
        </div>
        <div className="flex flex-col justify-around">
          <p className="text-slate-800 text-base font-bold">{user.name}</p>
          <p className="text-blue-600 text-xs font-normal">@{user.login}</p>
          <p className="text-slate-500 text-xs font-normal">{user.created_at}</p>
        </div>
      </div>
      {/*FIXME: BIO */}
      <div>
        <p className="text-slate-500 ml-6 mr-6 text-xs font-normal leading-normal text-start mt-[33px] h-[75px] md:w-[493px] md:ml-10 md:mr-10 md:mt-[38px]">
          {user.bio}
        </p>
      </div>
      {/*FIXME: REPERTORIO */}
      <div className=" w-72 h-20 bg-slate-50 rounded-[10px] flex justify-around text-center mt-[23px] ml-[15px] mr-3.5 md:w-[493px] md:h-20">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-slate-500 text-xs font-normal">{stat.label}</p>
            <p className=" text-start text-slate-800 text-base font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      {/*FIXME: LOCATION */}
      <div className=" w-48 h-32 flex  flex-col mt-6 gap-[17px] ml-6 mb-12 md:grid md:grid-cols-2 md:gap-x-[80px] md:gap-y-[22px] md:w-96 md:h-16">
        {infos.map((info) => (
          <div
            key={info.alt}
            className=" flex items-center text-slate-500 text-xs font-normal"
          >
            <Image src={info.icon} alt={info.alt} height={20} width={20}/>
            <p className="ml-[19.25px]">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
