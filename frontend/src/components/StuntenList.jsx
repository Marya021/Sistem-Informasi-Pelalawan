// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const StuntenList = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Stunten</h1>
      <h2 className="subtitle">Data Stunten</h2>
      <div className="flex items-center">
        <div className="relative overflow-hidden w-[85px] mr-4">
          <input type="file" className="abosolute block text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4 file:rounded-md
            file:border-0 file:text-sm file:font-semibold
            file:p-4  
            file:bg-green-50 file:text-green-700
            hover:file:bg-green-100 cursor-pointer" />
        </div>
        <Link
          to="/stunten/import"  
          className="px-4 p-1.5 text-[15px] bg-red-50 text-red-700 hover:bg-red0=-100 font-semibold rounded-[5px] "
        >
          Export
        </Link>
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StuntenList;
