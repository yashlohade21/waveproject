import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import {  Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

// const footer = () => {
//   <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
//   <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
//     <div className="flex flex-[0.5] justify-center items-center">
//       <img src={logo} alt="logo" className="w-32" />
//     </div>
//     <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
//       <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
//       <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
//       <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
//       <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
//     </div>
//   </div>

//   <div className="flex justify-center items-center flex-col mt-5">
//     <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
//     <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p>
//   </div>

//   <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

//   <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
//     <p className="text-white text-left text-xs">@kryptomastery2022</p>
//     <p className="text-white text-right text-xs">All rights reserved</p>
//   </div>
// </div>
// }

const Home = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          <br />
          <br />
          <br />
          <br />
          </p>
          <div className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Connect
            </span>
          </button>
          )}
          <br />
          <Link to="/nftexchange">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Nft Exchange
            </span>
          </button>
          </Link>
          <Link to="/exchange">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Exchange
            </span>
          </button>
          </Link>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Home