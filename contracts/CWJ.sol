// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9; 

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract CWJ is ERC721A, Ownable, ReentrancyGuard {
  using Strings for uint256;

  string public baseURI;
  string public baseExtension = ".json";
  string public notRevealedUri; 

  uint256 public publicSale_Cost = 0.095 ether;
  uint256 public preSale_Cost = 0.08 ether;

  uint256 public maxSupply = 305;
  uint256 public WlFreemint_Supply = 20;
  uint256 public preSale_Supply = 40 ;
  uint256 public publicSale_Supply = 200;

  uint256 public MaxperWallet_PreSale = 3;
  uint256 public MaxPerWallet_WlFreeMint = 1;

  bool public paused = false;
  bool public revealed = true;
  bool public PreSale_Live = false;
  bool public publicSale_Live = false;
  bool public WlFreemint_Live = false;

  bytes32 public merkleRoot = 0;

  constructor(
    string memory _initBaseURI
  ) ERC721A("Coffee with Jesus", "CWJ") {
    setBaseURI(_initBaseURI);
    
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
      function _startTokenId() internal view virtual override returns (uint256) {
        return 10;
    }

  /// @dev publicSale
  function publicSaleMint(uint256 tokens) public payable nonReentrant {
    require(!paused, "oops contract is paused");
    require(publicSale_Live, "Sale Hasn't started yet");
    uint256 supply = totalSupply();
    require(tokens > 0, "need to mint at least 1 NFT");
    require(supply + tokens <= maxSupply, "We Soldout");
    require(supply + tokens <= publicSale_Supply + preSale_Supply + WlFreemint_Supply, "publicSale supply reached max");
    require(msg.value >= publicSale_Cost * tokens, "insufficient funds");

      _safeMint(_msgSender(), tokens);
    
  }
/// @dev White-listed preSale
    function PreSaleMint(uint256 tokens, bytes32[] calldata merkleProof) public payable nonReentrant {
    require(!paused, "oops contract is paused");
    require(PreSale_Live, "sale Hasn't started yet");
    require(MerkleProof.verify(merkleProof, merkleRoot, keccak256(abi.encodePacked(msg.sender))), " You are not in the whitelist");
    uint256 supply = totalSupply();
    require(_numberMinted(_msgSender()) + tokens <= MaxperWallet_PreSale, "Max NFT Per Wallet exceeded");
    require(tokens > 0, "need to mint at least 1 NFT");
    require(supply + tokens <= maxSupply, "We Soldout");
    require(supply + tokens <= preSale_Supply + WlFreemint_Supply, "preSale supply reached max");
    require(tokens <= MaxperWallet_PreSale, "max mint per Tx exceeded");
    require(msg.value >= preSale_Cost * tokens, "not enough eth sent");

      _safeMint(_msgSender(), tokens);
    
  }

/// @dev free-mint for whitelisted wallets

    function whitelistedFreeMint(uint256 tokens, bytes32[] calldata merkleProof) public nonReentrant {
    require(!paused, "oops contract is paused");
    require(WlFreemint_Live, "mint Hasn't started yet");
    require(MerkleProof.verify(merkleProof, merkleRoot, keccak256(abi.encodePacked(msg.sender))), " You are not in the whitelist");
    uint256 supply = totalSupply();
    require(_numberMinted(_msgSender()) + tokens <= MaxPerWallet_WlFreeMint, "Max NFT Per Wallet exceeded");
    require(tokens > 0, "need to mint at least 1 NFT");
    require(supply + tokens <= maxSupply, "We Soldout");
    require(supply + tokens <= WlFreemint_Supply, "FreeMint supply reached max");
    require(tokens <= MaxPerWallet_WlFreeMint, "max mint per Tx exceeded");

      _safeMint(_msgSender(), tokens);
    
  }


  /// @dev use it for giveaway and mint for yourself
     function ownerMint(uint256 _mintAmount, address destination) public onlyOwner nonReentrant {
    require(_mintAmount > 0, "need to mint at least 1 NFT");
    uint256 supply = totalSupply();
    require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded");

      _safeMint(destination, _mintAmount);
    
  }

  


  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721AMetadata: URI query for nonexistent token"
    );
    
    if(revealed == false) {
        return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

    function numberMinted(address owner) public view returns (uint256) {
    return _numberMinted(owner);
  }

  //only owner
  function reveal(bool _state) public onlyOwner {
      revealed = _state;
  }

  function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }
  
  function set_MaxPerWallet_WlFreeMint(uint256 _limit) public onlyOwner {
    MaxPerWallet_WlFreeMint = _limit;
  }

    function set_MaxperWallet_PreSale (uint256 _limit) public onlyOwner {
    MaxperWallet_PreSale  = _limit;
  }
  
  function set_publicSale_Cost(uint256 _newCost) public onlyOwner {
    publicSale_Cost = _newCost;
  }
  
  function set_PreSale_Cost(uint256 _newCost) public onlyOwner {
    preSale_Cost = _newCost;
  }


  function setMaxsupply(uint256 _newsupply) public onlyOwner {
    maxSupply = _newsupply;
  }

    function set_PublicSale_Supply(uint256 _newsupply) public onlyOwner {
    publicSale_Supply = _newsupply;
  }

    function set_PreSale_Supply(uint256 _newsupply) public onlyOwner {
    preSale_Supply = _newsupply;
  }

    function set_WlFreemint_Supply(uint256 _newsupply) public onlyOwner {
    WlFreemint_Supply = _newsupply;
  }

 
  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }
  
  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
    notRevealedUri = _notRevealedURI;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

    function toggle_PreSale_Live(bool _state) external onlyOwner {
        PreSale_Live = _state;
    }

    function toggle_publicSale_Live(bool _state) external onlyOwner {
        publicSale_Live = _state;
    }

       function toggle_WlFreemint_Live(bool _state) external onlyOwner {
        WlFreemint_Live = _state;
    }
  
 
  function withdraw() public payable onlyOwner nonReentrant {
    (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
    require(success);
  }
}
