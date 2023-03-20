const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
import { config } from '../dapp.config'
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('../scripts/whitelist.js')

// global BigInt

const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL)
const contract = require('../artifacts/contracts/CWJ.sol/CWJ.json')
const nftContract = new web3.eth.Contract(contract.abi, config.contractAddress)

// Calculate merkle root from the whitelist array
const leafNodes = whitelist.map((addr) => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
const root = merkleTree.getRoot()


export const getTotalMinted = async () => {
  const totalMinted = await nftContract.methods.totalSupply().call()
  return totalMinted
}

export const getMaxSupply = async () => {
  const maxSupply = await nftContract.methods.maxSupply().call()
  return maxSupply
}

export const isPausedState = async () => {
  const paused = await nftContract.methods.paused().call()
  return paused
}

export const isPublicSaleState = async () => {
  const publicSale = await nftContract.methods.publicSale_Live().call()
  return publicSale
}

export const isPreSaleState = async () => {
  const PreSale = await nftContract.methods.PreSale_Live().call()
  return PreSale
}

export const isFreeMintState = async () => {
  const WlFreemint = await nftContract.methods.WlFreemint_Live().call()
  return WlFreemint
}


//Set up public sale mint-------------------------------------------------------------------------------------

export const publicSaleMint = async (mintAmount) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }

  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest'
  )

  const cost = await nftContract.methods.publicSale_Cost().call()

  

  // Set up our Ethereum transaction
  const tx = {
    to: config.contractAddress,
    from: window.ethereum.selectedAddress,
    value: parseInt(
      web3.utils.toWei(String(cost*mintAmount), 'ether')
    ).toString(16), // hex
    gas: String(25000 * mintAmount),
    data: nftContract.methods.publicSaleMint(mintAmount).encodeABI(),
    nonce: nonce.toString(16)
  }

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx]
    })

    return {
      success: true,
      status: (
        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
          <p>✅ Check out your transaction on Etherscan:</p>
          <p>{`https://etherscan.io/tx/${txHash}`}</p>
        </a>
      )
    }
  } catch (error) {
    return {
      success: false,
      status: '😞 Smth went wrong:' + error.message
    }
  }
}


//Set up PreSaleMint------------------------------------------------------------------------------------>

export const PreSaleMint = async (mintAmount) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }

  const leaf = keccak256(window.ethereum.selectedAddress)
  const proof = merkleTree.getHexProof(leaf)

  // Verify Merkle Proof
  const isValid = merkleTree.verify(proof, leaf, root)

  if (!isValid) { 
    return {
      success: false,
      status: '❌ Invalid Merkle Proof - You are not whitelisted'
    }
  }
  
  const wallet =(window.ethereum.selectedAddress)
  const numberMinted = await nftContract.methods.numberMinted(wallet) .call()
  const maxLimit = await nftContract.methods.MaxperWallet_PreSale().call()
  const cost = await nftContract.methods.preSale_Cost().call()
  const AbleToMint = (maxLimit - numberMinted)

  if (AbleToMint <  mintAmount){
    return {
      success: false,
      status: '❌  Exceeded max mint amount per wallet'  
    }
  }
  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest'
  )

  // Set up our Ethereum transaction

  const tx = {
    to: config.contractAddress,
    from: window.ethereum.selectedAddress,
    value: parseInt(
      web3.utils.toWei(String(cost*mintAmount), 'ether')
    ).toString(16), // hex
    gas: String(25000 * mintAmount),
    data: nftContract.methods
      .PreSaleMint(mintAmount, proof)
      .encodeABI(),
    nonce: nonce.toString(16)
  }

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx]
    })

    return {
      success: true,
      status: (
        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
          <p className='underline'>✅ Check out your transaction on Etherscan ✅</p>
        </a>
      )
    }
  } catch (error) {
    return {
      success: false,
      status: '😞 Ooops!:' + error.message
    }
  }
}



//Set up whitelistedFreeMint------------------------------------------------------------------------------------>

export const whitelistedFreeMint = async (mintAmount) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }

  const leaf = keccak256(window.ethereum.selectedAddress)
  const proof = merkleTree.getHexProof(leaf)

  // Verify Merkle Proof
  const isValid = merkleTree.verify(proof, leaf, root)

  if (!isValid) { 
    return {
      success: false,
      status: '❌ Invalid Merkle Proof - You are not whitelisted'
    }
  }
  
  const wallet =(window.ethereum.selectedAddress)
  const numberMinted = await nftContract.methods.numberMinted(wallet) .call()
  const maxLimit = await nftContract.methods.MaxPerWallet_WlFreeMint().call()
  const AbleToMint = (maxLimit - numberMinted)

  if (AbleToMint <  mintAmount){
    return {
      success: false,
      status: '📌 Exceeded max mint amount per wallet'  
    }
  }
  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest'
  )

  // Set up our Ethereum transaction

  const tx = {
    to: config.contractAddress,
    from: window.ethereum.selectedAddress,
    gas: String(25000 * mintAmount),
    data: nftContract.methods
      .whitelistedFreeMint(mintAmount, proof)
      .encodeABI(),
    nonce: nonce.toString(16)
  }

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx]
    })

    return {
      success: true,
      status: (
        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
          <p className='underline'>✅ Check out your transaction on Etherscan ✅</p>
        </a>
      )
    }
  } catch (error) {
    return {
      success: false,
      status: '😞 Smth went wrong:' + error.message
    }
  }
}
