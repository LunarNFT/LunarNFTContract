import json

# map the nft tokens
f = open('New_3333NFT.txt', 'r')
lines = f.readlines()
count = 0
map = {}
for line in lines:
	word = line.strip()
	word = word.replace(",", "")
	print("{} : {}".format(count, word))
	map[count] = int(word)
	count += 1
f.close()

# convert the big json to small jsons
f = open('nfts_data.json')
data = json.load(f)
for count in range(3333):
    print(count)
    index = map[count]
    i = data['nfts_table'][index-1]
    filename = "～/lunar/LunarNFTContract/metadata/json/%d" % count
    f2 = open(filename, "w+")
    s = "{\"image\":\"https://lunarnft.721.com/%d.png\",\n\"name\":\"Lunar #%d\",\n\"attributes\":[\n" % (count, count)
    for x in i['ui_traits']:
        line = "{\"trait_type\":\"%s\",\"value\":\"%s\"},\n" % (x , i['ui_traits'][x])
        s += line
    s = s[:-2]
    s += "\n]}"
    f2.write(s);
    count += 1
    f2.close()
f.close()
