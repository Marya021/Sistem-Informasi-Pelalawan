import React from "react";
import { avatar } from "../img";
import ExtendsProfil from "./ExtendsProfil";

const ProfilWarga = () => {
  return (
    <div className="w-full mx-auto max-w-[1100px] space-y-4">
      <div>
        <div className="text-3xl font-semibold">Profil Warga</div>
      </div>
      <div className="flex space-x-2">
        <div className="border-2 p-5 rounded-lg">
          <div className="w-[200px] h-[200px]">
            <img src={avatar} className="w-full h-full" />
          </div>
          <div>
            <button className="btn w-full rounded-[3px] border-2 leading-none h-auto p-3 min-h-0 text-sky-400 hover:text-white font-bold bg-white hover:bg-sky-500 hover:border-sky-500 border-sky-500 ">Ubah Foto Profil</button>
          </div>
        </div>
        <div className="border-2 p-5 w-full rounded-lg ">
          <ExtendsProfil />
        </div>
      </div>
    </div>
  );
};

export default ProfilWarga;
