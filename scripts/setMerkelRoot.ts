import { ethers } from "hardhat";

async function main() {
  const nftFactory = await ethers.getContractFactory("LunarNFT");
  const nft = nftFactory.attach(process.env.CONTRACT_ADDRESS as any);

  console.log("Current merkle root: %s", await nft.presaleMerkleRoot());

  const tx = await nft.setPresaleMerkleRoot("0x7c56f5805c76f45f5c0a6001a13a7b9510c160a37eb43592ca0b2254f80009ac");
  console.log("Tx: %s", tx.hash);

  await tx.wait();
  console.log("Merkle root is set to: %s", await nft.presaleMerkleRoot());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
