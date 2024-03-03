/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useUserPresenter } from "@/core/presentation/presenter/useUserPresenter";
type Props = {};

function Header({}: Props) {
  const { userInfo, token } = useUserPresenter();

  return (
    <div className="flex bg-blue-600 flex-1 p-2 flex-row justify-between align-middle">
      <h3 className="text-3xl text-white">This is title</h3>
      {token ? (
        <div className="flex flex-row items-center">
          <img className="w-10 h-10 rounded-full" src={userInfo.imageSrc} alt="Rounded avatar" />
          <div className="flex flex-col ml-4">
            <span>{`${userInfo.firstName} ${userInfo.lastName}`}</span>
            
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="ml-2">login user</span>
        </div>
      )}
    </div>
  );
}

export default Header;
