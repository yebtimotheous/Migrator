import { ethers } from "ethers";

const getEthers = async () => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      await window.ethereum.enable();
      return provider;
    } catch (error) {
      throw new Error("User denied account access");
    }
  } else {
    throw new Error("No Ethereum provider found");
  }
};

export default getEthers;
