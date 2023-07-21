import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormAddWarga = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Form Warga</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="">
            <form
              // onSubmit={saveProduct}
              className="space-y-4"
            >
              {/* <p className="has-text-centered">{msg}</p> */}
              <div className="space-y-2 mt-4">
                <div>
                  <h2>Masukkan Pas Photo 4x3</h2>
                  <input type="file" onChange={handleImageChange} />
                  {selectedImage && (
                    <div>
                      <img src={selectedImage} alt="Selected" />
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="">NO. KK</label>
                <div className="control">
                  <input
                    type="text"
                    className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="">NO. NIK</label>
                <div className="control">
                  <input
                    type="text"
                    className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="">ALAMAT</label>
                <div className="control">
                  <input
                    type="text"
                    className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="">NO. HP</label>
                <div className="control">
                  <input
                    type="text"
                    className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="btn rounded-[3px] border-0 leading-none h-auto p-3 min-h-0 text-white font-bold bg-green-500 hover:bg-green-700"
                  >
                    Data Stunting
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddWarga;
