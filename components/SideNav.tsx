"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { PiArrowFatLinesUpLight } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { GiVikingLonghouse } from "react-icons/gi";
import { BiStats } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { LuTestTubes } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
export default function SideNav() {
  const activeLink = " bg-[#007DFC]  rounded-md text-white ";
  const pathName = usePathname();

  const bolder = "font-bold text-gray-950 ";
  return (
    <aside className="w-[15%] bg-gray-200">
      <div className="flex flex-col items-center mb-10 mt-10 gap-y-1">
        <Link href={"/"}>
          <svg
            id="logo-86"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="ccustom"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
              fill="#007DFC"
            ></path>
            <path
              className="ccustom"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
              fill="#007DFC"
            ></path>
          </svg>
        </Link>
        <h2 className="font-bold uppercase">ScoreRolls</h2>
      </div>
      <div className="w-full">
        <nav className=" flex flex-col items-center gap-y-4 transition-all">
          <div className="flex justify-between w-full">
            <Link
              href={"/"}
              className={`flex items-center pl-10 gap-x-2 text-gray-400 transition-all ${
                pathName === "/" ? bolder : ""
              }`}
            >
              <TiDocumentText
                className={`text-2xl ${pathName === "/" ? activeLink : ""}`}
              />
              Materials
            </Link>

            {pathName === "/" ? (
              <div className="bg-[#007DFC] w-[.3rem] h-[2.3rem] rounded-l-lg"></div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between w-full">
            <Link
              href={"/classes"}
              className={`flex items-center pl-10 gap-x-2 text-gray-400 ${
                pathName === "/classes" ? bolder : ""
              }`}
            >
              <GiVikingLonghouse
                className={`text-2xl ${
                  pathName === "/classes" ? activeLink : ""
                }`}
              />
              Classes
            </Link>
            {pathName === "/classes" ? (
              <div className="bg-[#007DFC] w-[.3rem] h-[2.3rem] rounded-l-lg"></div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between w-full">
            <Link
              href={"/progress"}
              className={`flex items-center pl-10 gap-x-2 text-gray-400 ${
                pathName === "/progress" ? bolder : ""
              }`}
            >
              <PiArrowFatLinesUpLight
                className={`text-2xl ${
                  pathName === "/progress" ? activeLink : ""
                }`}
              />
              Progress
            </Link>
            {pathName === "/progress" ? (
              <div className="bg-[#007DFC] w-[.3rem] h-[2.3rem] rounded-l-lg"></div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between w-full">
            <Link
              href={"/statistics"}
              className={`flex items-center pl-10 gap-x-2 text-gray-400 ${
                pathName === "/statistics" ? bolder : ""
              }}`}
            >
              <BiStats
                className={`text-2xl ${
                  pathName === "/statistics" ? activeLink : ""
                }`}
              />
              Statistics
            </Link>
            {pathName === "/statistics" ? (
              <div className="bg-[#007DFC] w-[.3rem] h-[2.3rem] rounded-l-lg"></div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between w-full">
            <Link
              href={"/tests"}
              className={`flex items-center pl-10 gap-x-2 text-gray-400 ${
                pathName === "/tests" ? bolder : ""
              }`}
            >
              <LuTestTubes
                className={`text-2xl ${
                  pathName === "/tests" ? activeLink : ""
                }`}
              />
              Tests
            </Link>
            {pathName === "/tests" ? (
              <div className="bg-[#007DFC] w-[.3rem] h-[2.3rem] rounded-l-lg"></div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between w-full">
            <Link
              href={"/meetings"}
              className={`flex items-center pl-10 gap-x-2 text-gray-400 ${
                pathName === "/meetings" ? bolder : ""
              }}`}
            >
              <BsPerson
                className={`text-2xl ${
                  pathName === "/meetings" ? activeLink : ""
                }`}
              />
              Meetings
            </Link>
            {pathName === "/meetings" ? (
              <div className="bg-[#007DFC] w-[.3rem] h-[2.3rem] rounded-l-lg"></div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between w-full">
            <Link
              href={"/settings"}
              className={`flex items-center pl-10 gap-x-2 text-gray-400 ${
                pathName === "/settings" ? bolder : ""
              }}`}
            >
              <HiOutlineWrenchScrewdriver
                className={`text-2xl ${
                  pathName === "/settings" ? activeLink : ""
                }`}
              />
              Settings
            </Link>
            {pathName === "/settings" ? (
              <div className="bg-[#007DFC] w-[.3rem] h-[2.3rem] rounded-l-lg"></div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
      <div className="w-full flex items-center flex-col mt-[20rem]">
        <button className="flex items-center text-gray-400 gap-x-2 mb-3">
          <IoIosLogOut className="text-2xl" />
          Logout
        </button>
      </div>
    </aside>
  );
}
