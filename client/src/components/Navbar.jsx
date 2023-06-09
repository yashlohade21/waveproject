import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";
import {  Link } from "react-router-dom";

import { TransactionContext } from "../context/TransactionContext";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <Link to="/"><img src={logo} alt="logo" className="w-32 cursor-pointer" /></Link>
      </div>
      <ul className="text-white md:flex hidden flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        {[""].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
          <li>
            <Link to="/welcome">Exchange </Link>
          </li>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                Login
              </p>
            </button>
          )}
          <li>
            <Link to="/nftexchange"> NftExchange</Link>
          </li>
{/* 
          <li>
            <Link to="/nftimage"> NftImages</Link>
          </li> */}
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
