import React, { useState } from "react";
import { RiUser3Fill } from "react-icons/ri";
import Modal from "/components/UI/Modal";
import { useGlobalAuthContext } from "/context/AuthContext";
const TopHeader = () => {
  const { showProfileDropdown, setShowProfileDropdown, user, logout } =
    useGlobalAuthContext();
  return (
    <div className="absolute left-0 right-0 px-4 top-0 h-[70px] ml-[250px] border-b-[1px] border-gray-200 flex items-center justify-between">
      {/* left */}
      <p className="text-lg font-semibold">
        {user && user?.products[user?.currentProduct]?.name}
      </p>
      {/* Right */}
      <div className="flex items-center justify-center gap-2">
        <p className="px-5 py-1.5 text-sm font-semibold text-white bg-purple-500 rounded-full">
          Get Premium
        </p>
        <p className="text-sm opacity-70">to further scale up your product</p>
      </div>
      <button
        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        className="flex items-end justify-center w-10 h-10 text-3xl rounded-full text-Primary/50 bg-Primary/10"
      >
        <RiUser3Fill className="rounded-full" />
      </button>

      <Modal
        isVisible={showProfileDropdown}
        onClose={() => setShowProfileDropdown(false)}
      >
        <div className="absolute gap-2 right-4 top-[80px] bg-white rounded-standard/2 flex flex-col items-start justify-start p-3 w-full max-w-[250px]">
          <div>
            <p className="font-semibold opacity-90">Durgesh Kumar</p>
            <p className="">@Company Name</p>
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <p>View Profile</p>
          <p>Account Settings</p>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div>
            <p>Blog</p>
            <p>Feedback</p>
            <p>Privacy</p>
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <button
            onClick={logout}
            className="w-full py-1.5 rounded-standard/4 ring-2 ring-Primary/30 hover:ring-Primary/70 transition-all duration-200 ease-out text-Primary"
          >
            Logout
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TopHeader;
