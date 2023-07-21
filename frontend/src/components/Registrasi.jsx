import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoBigData } from "../img";

const Registrasi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <form onSubmit={saveUser} className="space-y-4 w-4/12 px-5 pt-4 mx-auto">
      <div className="flex justify-center">
        <img src={logoBigData} alt="" className="w-[200px] mb-5" />
      </div>
      <p className="has-text-centered">{msg}</p>
      <h1 className="font-bold text-2xl">Sign Up</h1>
      <div className="space-y-2">
        <label className="">Name</label>
        <div className="control">
          <input
            type="text"
            className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="">Email</label>
        <div className="control">
          <input
            type="text"
            className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="">Password</label>
        <div className="control">
          <input
            type="password"
            className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="">Confirm Password</label>
        <div className="control">
          <input
            type="password"
            className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            placeholder="*******"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="">Role</label>
        <div className="control">
          <div className="w-full border-2">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
            >
              <option value="PILIH">
                PILIH
              </option>
              <option value="DINAS PENDIDIKAN DAN KEBUDAYAAN">
                DINAS PENDIDIKAN DAN KEBUDAYAAN
              </option>
              <option value="DINAS KESEHATAN">DINAS KESEHATAN</option>
              <option value="DINAS PEKERJAAN UMUM DAN PENATAAN RUANG">
                DINAS PEKERJAAN UMUM DAN PENATAAN RUANG
              </option>
              <option value="DINAS PERHUBUNGAN">DINAS PERHUBUNGAN</option>
              <option value="DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL">
                DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL
              </option>
              <option value="DINAS SOSIAL">DINAS SOSIAL</option>
              <option value="DINAS TENAGA KERJA">DINAS TENAGA KERJA</option>
              <option value="DINAS KOPERASI, USAHA KECIL DAN MENENGAH, PENDUSTRIAN DAN PERDAGANGAN">
                DINAS KOPERASI, USAHA KECIL DAN MENENGAH, PENDUSTRIAN DAN
                PERDAGANGAN
              </option>
              <option value="DINAS KETAHANAN PANGAN, TANAMAN PANGAN DAN HORTIKULTURA">
                DINAS KETAHANAN PANGAN, TANAMAN PANGAN DAN HORTIKULTURA
              </option>
              <option value="DINAS PERKEBUNAN DAN PETERNAKAN">
                DINAS PERKEBUNAN DAN PETERNAKAN
              </option>
              <option value="DINAS PERIKANAN">DINAS PERIKANAN</option>
              <option value="DINAS PARIWISATA, KEPEMUDAAN DAN OLAHRAGA">
                DINAS PARIWISATA, KEPEMUDAAN DAN OLAHRAGA
              </option>
              <option value="DINAS LINGKUNGAN HIDUP">
                DINAS LINGKUNGAN HIDUP
              </option>
              <option value="DINAS PEMBERDAYAAN PEREMPUAN, PERLINDUNGAN ANAK DAN KELUARGA BERENCANA">
                DINAS PEMBERDAYAAN PEREMPUAN, PERLINDUNGAN ANAK DAN KELUARGA
                BERENCANA
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="control">
          <button
            type="submit"
            className="btn w-full rounded-[3px] border-0 leading-none h-auto p-3 min-h-0 text-white font-bold bg-red-500 hover:bg-red-700"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Registrasi;
