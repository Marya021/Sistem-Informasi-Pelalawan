import React from "react";
import { IoCircle } from "react-icons/io5";

const UbahData = ({ title, isi, ubah, map }) => {
  return (
    <div className="w-full flex text-[14px]">
      <div className="w-2/12 font-bold ">{title}</div>
      <div className="w-10/12  text-gray-700">
        <div>
          {isi}
          <a href="#" className="ml-4 text-base font-normal text-sky-400">
            {ubah && <>ubah</>}
          </a>
        </div>
        {map && (
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.915048872423!2d101.8418593!3d0.3838967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5c58bc8ce98ef%3A0x765212d438af9402!2sDiskominfo%20Pelalawan!5e0!3m2!1sid!2sid!4v1688977406707!5m2!1sid!2sid"
              width="400"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default UbahData;
