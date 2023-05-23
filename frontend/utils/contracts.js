import { Contract } from "@ethersproject/contracts";
import OldToken from "../artifacts/contracts/OldToken.sol/OldToken.json";
import TokenMigration from "../artifacts/contracts/TokenMigration.sol/TokenMigration.json";

const oldTokenAddress = "0x123..."; // Replace with your OldToken contract address
const tokenMigrationAddress = "0x456..."; // Replace with your TokenMigration contract address

export function getOldToken(provider) {
  return new Contract(oldTokenAddress, OldToken.abi, provider.getSigner());
}

export function getTokenMigration(provider) {
  return new Contract(tokenMigrationAddress, TokenMigration.abi, provider.getSigner());
}
