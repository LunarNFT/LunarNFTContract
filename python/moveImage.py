import shutil

# map the nft tokens
f = open('New_3333NFT.txt', 'r')
lines = f.readlines()
count = 0
for line in lines:
	word = line.strip()
	word = word.replace(",", "")
	print("{} : {}".format(count, word))
	oldIndex = int(word)
	oldfile = "～/Downloads/RENDERFINAL/lunar%04d.png" % oldIndex
	if oldIndex >= 10000:
		oldfile = "～/Downloads/RENDERFINAL/lunar%5d.png" % oldIndex
	newfile = "～/lunar/LunarNFTContract/metadata/media/%d.png" % count
	print(oldfile)
	print(newfile)
	shutil.move(oldfile, newfile)
	count += 1
f.close()
