// import React from 'react';

import { IoIosSend } from "react-icons/io";

const From = () => {
    return (
        <div className="p-7 ">
        <form className="card-body ">
        <div className="flex w-full justify-between gap-4">
        <div className="form-control flex-1 ">
          <label className="label">
            <span className="label-text">Name*</span>
          </label>
          <input type="text" placeholder="name" className="input bg-white input-bordered" required />
        </div>
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input type="email" placeholder="email" className="input bg-white input-bordered" required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone*</span>
          </label>
          <input type="text" placeholder="phone" className="input bg-white input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message*</span>
          </label>
          <textarea className="textarea bg-white" placeholder="Message"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button 
          className="btn btn-primary bg-gradient-to-r from-[#835D23] to-[#B58130] w-52 mx-auto text-white">
          Send Message
          <IoIosSend className="text-2xl"></IoIosSend>
          </button>
        </div>
      </form>
        </div>
    );
};

export default From;