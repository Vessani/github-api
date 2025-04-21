import Image from "next/image";

export function HeaderTheme() {
  return (
    <div className="flex flex-row items-center mt-[31px] ml-6 mr-6 justify-between w-80 h-9 md:w-[573px] md:h-9 ">
      <p className="text-gray-800 text-2xl font-bold">DEVFINDER</p>
      <div className="flex text-slate-500 font-bold gap-4 items-center">
        <p className="text-xs tracking-[2.50px]">DARK</p>
        <Image
          src={"/assets/icon-moon.svg"}
          alt="Icon Moon"
          height={20}
          width={20}
          className="object-contain"
        />
      </div>
    </div>
  );
}
