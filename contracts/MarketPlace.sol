// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract User{
    mapping(uint => uint) address2amount;
}

contract Supplier is User{

    function setArtQuantity(uint artID, uint quantity) public {
        address2amount[artID] = quantity;
    }

    function addArtQuantity(uint artID, uint quantity) public {
        address2amount[artID] += quantity;
    }
}

contract Buyer is User{

    function buyArt(uint artID) public {
        address2amount[artID]++;
    }

}

contract Verifier{

    struct certificate{
        
        uint artId;
        // address certAddress;
        address owner;
    }

    address id;
    certificate[] allcert;

    constructor() {
        id = msg.sender;
        
    }

    function verifyCertificate(uint idNo, address ownerAddress) public view returns(bool) {
         for(uint i = 0; i< allcert.length; i++){
             if(idNo == allcert[i].artId){
                if(allcert[i].owner == ownerAddress){
                    return true;
                }
            }
         }
         return false;
    }   

    function issueVerifying(uint artId, address ownerAddress) public {
        require(checkUnique(artId), "INVALID");
        certificate memory c = certificate(artId, ownerAddress);
        allcert.push(c);

    }

    function checkUnique(uint idNo) private returns(bool){
        for(uint i = 0; i< allcert.length; i++){
            if(idNo == allcert[i].artId){
                return false;
            }
        }
        return true;
    }

}

contract Marketplace {
    using Counters for Counters.Counter;

    Counters.Counter nArts;
    //address artContract;

    enum OrderStatus {forSale, sold, onDeliver, delivered}

    struct Art {
        string name;
        address originalOwner;
        string genre;
        string description;
        bool isBeingSold;
        address[] currentSellers;
        uint256[] prices;
    }

    struct Order {
        address buyer;
        address seller;
        uint256 artID;
        uint256 price;
        OrderStatus status;
    }

    Order[] orders;

    struct Certificate {
        uint256 artworkId;
        address issuer;
        bool isIssued;
        address nftContract;
        uint256 tokenId;
    }


    mapping(uint256 => Art) arts;
    mapping(address => Supplier) suppliers;
    mapping(address => Buyer) buyers;

    address[] allsuppliers;
    address[] allBuyers;

    constructor() {
        nArts.reset();
    }

    function registerSupplier() public{
        require(!checkSupplier(msg.sender), "already regestered");
        suppliers[msg.sender] = new Supplier();
        allsuppliers.push(msg.sender);
    }


    function addNewArt(
        string memory _name,
        string memory _genre,
        string memory _description,
        uint256 _price,
        uint _quantity,
        bool isBeingSold
    ) public {
        require(checkSupplier(msg.sender), "unregester supplier");
        uint256 artID = nArts.current();
        nArts.increment();

        address[] memory _supplier = new address[](1);
        _supplier[0] = msg.sender;
        uint256[] memory _prices = new uint256[](1);
        _prices[0] = _price;

        arts[artID] =  Art({
            name: _name,
            originalOwner: msg.sender,
            genre: _genre,
            description: _description,
            isBeingSold: isBeingSold,
            currentSellers: _supplier,
            prices: _prices
            // status: OrderStatus.forSale
            // presentBuyer: msg.sender
        });
        
        suppliers[msg.sender].setArtQuantity(artID, _quantity);
        
    }


    function addArtToSell(uint artID, uint price) public {
        // check first
        // require(msg.sender == arts[artID].presentBuyer, "u are not current owner of this");

        Art storage art = arts[artID];
        address seller = msg.sender;
        art.currentSellers.push(seller);
        art.prices.push(price);
    }

    function getArts() public view returns (Art[] memory){
        require(isAddressInArray(allBuyers, msg.sender), "not a registered buyer");
        Art[] memory result = new Art[](nArts.current());

        for (uint i=0; i < nArts.current(); i++) {
            result[i] = arts[i];
        }

        return result;
    }

    function getArtsByName(string memory name) public view returns (Art[] memory){
        require(isAddressInArray(allBuyers, msg.sender), "not a registered buyer");
        uint count = 0;

        for (uint i = 0; i<nArts.current(); i++){
            if(keccak256(abi.encodePacked(arts[i].name)) == keccak256(abi.encodePacked(name))) {
               count++; 
            }
        }

        Art[] memory result = new Art[](count);
        uint k = 0;
        for (uint i = 0; i<nArts.current(); i++){
            if(keccak256(abi.encodePacked(arts[i].name)) == keccak256(abi.encodePacked(name))) {
               result[k] = arts[i]; 
               k++;
            }
        }

        return result;
    }

        function getArtsByGenre(string memory name) public view returns (Art[] memory){
        require(isAddressInArray(allBuyers, msg.sender), "not a registered buyer");
        uint count = 0;

        for (uint i = 0; i<nArts.current(); i++){
            if(keccak256(abi.encodePacked(arts[i].genre)) == keccak256(abi.encodePacked(name))) {
               count++; 
            }
        }

        Art[] memory result = new Art[](count);
        uint k = 0;
        for (uint i = 0; i<nArts.current(); i++){
            if(keccak256(abi.encodePacked(arts[i].genre)) == keccak256(abi.encodePacked(name))) {
               result[k] = arts[i]; 
               k++;
            }
        }

        return result;
    }

        function getArtsByPriceRange(uint minrange, uint maxrange) public view returns (Art[] memory){
        require(isAddressInArray(allBuyers, msg.sender), "not a registered buyer");
        uint count = 0;

        for (uint i = 0; i<nArts.current(); i++){
           for(uint j = 0; j<arts[i].prices.length; j++){
                if(arts[i].prices[j] < maxrange && arts[i].prices[j] > minrange){
                    count++;
                }
           }
        }

        Art[] memory result = new Art[](count);
        uint k = 0;
        for (uint i = 0; i<nArts.current(); i++){
           for(uint j = 0; j<arts[i].prices.length; j++){
                if(arts[i].prices[j] < maxrange && arts[i].prices[j] > minrange){
                    result[k] = arts[i];
                    k++;
                }
           }
        }

        return result;
    }

    function updateArtQuantity(uint artID, uint quantity) public {
        // check first
        require(msg.sender == arts[artID].originalOwner, "u are not original owner of this");
        Art storage art = arts[artID];
        Supplier seller = suppliers[msg.sender];
        seller.setArtQuantity(artID, quantity);

        if(quantity == 0){
            // remove from sellers
            uint index = addressSearchArray(art.currentSellers, msg.sender);
            art.currentSellers[index] = art.currentSellers[art.currentSellers.length - 1];
            art.currentSellers.pop();

            // remove from prices
            art.prices[index] = art.prices[art.prices.length - 1];
            art.prices.pop();
        }
    }

    function registerBuyer() public {
        require(!checkBuyer(msg.sender), "already regestered");
        address buyer = msg.sender;
        buyers[buyer] = new Buyer();
        allBuyers.push(msg.sender);
    }

    function buyArt(uint artID, address _seller, uint256 price) public {
        require(isAddressInArray(allBuyers, msg.sender), "not a registered buyer");
        buyers[msg.sender].buyArt(artID);
        orders.push(Order(msg.sender, _seller, artID, price, OrderStatus.onDeliver));
    }



    function deliverAck(uint artID, address _seller) public {
       // require(msg.sender == arts[artID].presentBuyer, "Only actual buyer can acknowledge");
         uint ind = orders.length + 5;
        for(uint i=0; i<orders.length; i++){
            if(orders[i].artID == artID && orders[i].seller == _seller && orders[i].buyer == msg.sender){
                ind = i;
            }
        }
        require(ind < orders.length, "Only actual buyer can acknowledge");
        orders[ind].status = OrderStatus.delivered;
    }

    function checkStatus(uint artID, address seller) public view returns (string memory) {
        uint ind = orders.length + 5;
        for(uint i=0; i<orders.length; i++){
            if(orders[i].artID == artID && orders[i].seller == seller && orders[i].buyer == msg.sender){
                ind = i;
            }
        }
        require(ind < orders.length, "Order does not exist");
        OrderStatus stat = orders[ind].status;
        if(stat == OrderStatus.forSale){
            return "Artwork is for sale";
        }
        else if(stat == OrderStatus.onDeliver){
            return "On delivery";
        }
        else if(stat == OrderStatus.sold){
            return "Art sold";
        }
        else{
            return "Delivered";
        }
    }


    // --------------------------- helper functions ---------------------------

    function isAddressInArray(address[] memory addresses, address target) public pure returns (bool) {
        for (uint i = 0; i < addresses.length; i++) {
            if (addresses[i] == target) {
                return true;
            }
        }
        return false;
    }

    // returns index if present, or address.length is not present
    function addressSearchArray(address[] memory addresses, address target) public pure returns (uint) {
        for (uint i = 0; i < addresses.length; i++) {
            if (addresses[i] == target) {
                return i;
            }
        }
        return addresses.length;
     }
    function checkSupplier(address checker) private view returns(bool) {
        for(uint256 i =0; i< allsuppliers.length; i++){
            if(checker == allsuppliers[i]){
                return true;
            }
        }
        return false;
     }
    function checkBuyer(address checker) private view returns(bool) {
        for(uint256 i =0; i< allBuyers.length; i++){
            if(checker == allBuyers[i]){
                return true;
            }
        }
        return false;
     }
    }

