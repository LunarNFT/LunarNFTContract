/* eslint-disable import/no-duplicates */
import { ethers } from "hardhat";

/*
CONTRACT_ADDRESS= npx hardhat run scripts/getUrl.ts --network rinkeby
*/
async function main() {
  const nftFactory = await ethers.getContractFactory(
    "AllowlistCollectorForLunarNFT"
  );
  console.log(process.env.CONTRACT_ADDRESS);
  const nft = nftFactory.attach(process.env.CONTRACT_ADDRESS as any);
  let url = await nft.tokenURI(0);
  console.log("tokenURI(0)= %s", url);
  url = await nft.tokenURI(1);
  console.log("tokenURI(1)= %s", url);
  url = await nft.tokenURI(1999);
  console.log("tokenURI(1999)= %s", url);
  const baseurl = await nft.baseURI();
  console.log("baseurl= %s", baseurl);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
