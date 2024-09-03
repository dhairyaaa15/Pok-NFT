import React from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const Navbar: React.FC = () => {
  return (
    <div className="w-3/5 mx-auto mt-6 flex justify-between items-center bg-lime-900 bg-opacity-85 p-4 rounded-3xl">
      <div className="flex flex-row items-center">
        <h1 className="text-gray-400 text-2xl font-pixel">PokéNFT</h1>
      </div>
      
      <div className="flex flex-row items-center space-x-4">
        <WalletSelector />
      </div>
    </div>
  );
};

export default Navbar;
