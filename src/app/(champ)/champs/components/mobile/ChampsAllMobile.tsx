import React from "react";
import { Champ, ChampCustomImage } from "@/types/Champs";
import ChampGrid from "../../../components/ChampGrid";
import Link from "next/link";
import Image from "next/image";
type Props = {
  champs: (Champ & ChampCustomImage)[];
};
const ChampsAllMobile = ({ champs }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[768px]">
      <div className="flex items-center">
        <h1 className="text-xl font-HeirofLight font-bold text-subColor">전체 챔피언 목록</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        {champs.map((champ) => (
          <Link key={champ.id} href={`/champs/${champ.id}`} className="w-full">
            <div className="flex flex-col justify-center items-center w-full relative">
              {/* <div className="absolute top-0 left-0 w-full h-[100%] bg-black opacity-50"></div> */}
              <div className="w-full h-full">
                <Image src={champ.defaultImage} alt="" width={1920} height={1080} />
              </div>
              {/* <Image src={champ.defaultImage} alt="" layout="fill" /> */}
              <div className="absolute top-2 right-2 h-[30px] flex items-center">
                <div className="bg-black opacity-75 pl-2 pr-2 rounded-lg">
                  <span className="text-sm">{champ.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    // <div className="flex flex-col items-center w-[80%]">
    //   <div className="mb-10 pb-10 border-b-2 pt-10 pl-4 pr-4 rounded-xl">
    //     <div className="flex flex-col justify-center items-center h-20 mb-4">
    //       <h1 className="text-xl font-HeirofLight font-bold text-subColor mb-8 ">
    //         전체 챔피언 목록
    //       </h1>
    //     </div>
    //     <div className="flex flex-col justify-center items-center gap-4 w-full">
    //       {champs.map((champ) => (
    //         <Link key={champ.id} href={`/champs/${champ.id}`} className="w-[50%]">
    //           <div className="flex flex-col justify-center items-center w-full h-full relative">
    //             {/* <div className="absolute top-0 left-0 w-full h-[100%] bg-black opacity-50"></div> */}
    //             <Image src={champ.defaultImage} alt="" width={1024} height={720} />
    //             <div className="absolute top-2 right-2 h-[30px] flex items-center">
    //               <div className="bg-black opacity-75 pl-2 pr-2 rounded-lg">
    //                 <span className="text-sm">{champ.name}</span>
    //               </div>
    //             </div>
    //           </div>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ChampsAllMobile;
