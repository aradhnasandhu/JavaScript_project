/*
Assessment Requirements
1.⁠ ⁠Create a variable that can hold a number of NFT's. What type of variable might this be?
2.⁠ ⁠Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3.⁠ ⁠Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4.⁠ ⁠For good measure, getTotalSupply() should return the number of NFT's you have created
*/

const NFTs = []

function mintNFT(_movieName, _directorName, _globalReach, _releaseDate) {

    const NFT = {
        "movieName": _movieName,
        "directorName": _directorName,
        "globalreach": _globalReach,
        "releaseDate": _releaseDate,

    }

    NFTs.push(NFT);
    console.log("Movie Name: " + _movieName);
    
}


function listNFTs() {

    for (let i = 0; i < NFTs.length; i++) {
        //console.log("\nID: " + (i + 1))
        console.log("\n")
        console.log("name: " + NFTs[i].movieName);
        console.log("director name: " + NFTs[i].directorName);
        console.log("global reach: " + NFTs[i].globalreach);
        console.log("release date: " + NFTs[i].releaseDate);
        

    }
}


function getTotalSupply() {
    console.log("\n" + NFTs.length)


}


mintNFT("Spiderman: no way home", "John Watts", "$1.9b", "Dec12,2021");
mintNFT("DeadPool 2", "David Leitch", "$785.8m", "May15,2018");
mintNFT("Godzilla vs Kong", "Adam Wingard", "$567.1m", "March31,2021");

listNFTs();
getTotalSupply(); 
