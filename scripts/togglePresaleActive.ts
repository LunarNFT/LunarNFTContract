import { ethers } from "hardhat";

async function main() {
  const nftFactory = await ethers.getContractFactory("LunarNFT");
  console.log(process.env.CONTRACT_ADDRESS);
  const nft = await nftFactory.attach(process.env.CONTRACT_ADDRESS as any);
  await nft.togglePresaleActive();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
