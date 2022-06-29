/* eslint-disable import/no-duplicates */
import hre from "hardhat";
import { ethers } from "hardhat";

/*
npx hardhat run scripts/deploy.ts --network hardhat
RINKEBY_PRIVATE_KEY= npx hardhat run scripts/deploy.ts --network rinkeby
*/
async function main() {
  const contractName = "AllowlistCollectorForLunarNFT";
  const nftFactory = await ethers.getContractFactory(contractName);
  const merkleRoot =
    "0xac7bed30976a9e81a333313a62bf9fc12c479b9250fc39f0fa061bf5fc2e0383";

  const nft = await nftFactory.deploy(merkleRoot, 3333, {
    maxPriorityFeePerGas: ethers.utils.parseUnits("1.1", "gwei"),
    maxFeePerGas: ethers.utils.parseUnits("25", "gwei"),
    gasLimit: 15000000,
  });
  console.log("Deploy at tx %s", nft.deployTransaction.hash);

  console.log(
    "ETHERSCAN_API_KEY= npx hardhat --network %s verify --contract contracts/%s.sol:%s %s",
    hre.network.name,
    contractName,
    contractName,
    nft.address,
    merkleRoot
  );

  await nft.deployed();
  console.log("Deploy to address %s", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
