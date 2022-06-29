New_3333NFT.txt is the mapping table between NFT token id and original 20000 NFT index
getjson.py is to read the nfts_data.json (NFT metadata file provided by artist team) and generates the 3333 json files based on the mapping
moveImage.py is to copy the 3333 images from the 20000 images (NFT images provided by the artist team) and rename the image based on the mapping
note: 
the generated 3333 json files should be put here: https://github.com/LunarNFT/LunarNFTContract/tree/main/metadata/json
the corresonding 3333 images should be uploaded to aliyun or ipfs, the images url link should match link in 3333 json file
if the nfts_data.json is updated later, we need rerun the getjson.py to re-generate the 3333 json files and upload again
