import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/products', {
            name:  name,
            price: price

        })
        navigate('/products');
    } catch (error) {
        if(error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Upload File</h1>
      
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="">
            <form onSubmit={saveProduct} className="space-y-4">
                <p className="has-text-centered">{msg}</p>
              <div className="space-y-2">
                
                <div className="control">
                  <input
                    type="file"
                    className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price Product"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="btn rounded-[3px] border-0 leading-none h-auto p-3 min-h-0 text-white font-bold bg-green-500 hover:bg-green-700">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
