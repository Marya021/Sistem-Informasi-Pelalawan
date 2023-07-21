import React from "react";
import UbahData from "./UbahData";
import GoogleMapReact from 'google-map-react';

const ExtendsProfil = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div className="">
      <div className="space-y-4">
        <div className="font-bold text-2xl">Ubah Biodata Diri</div>
        <div className="space-y-10">
            <UbahData title={"No. NIK"} isi={"140XXXXXXXXX"}/>
            <UbahData title={"No. KK"} isi={"140XXXXXXXXX"}/>
            <UbahData title={"No. Telepon"} isi={"0812-3456-7689"} ubah={true}/>
            <UbahData title={"Alamat"} isi={"Jln. Cinta Damai"} ubah={true} map={true}/>
            
        </div>
      </div>
    </div>
  );
};

export default ExtendsProfil;
