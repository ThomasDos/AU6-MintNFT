require('dotenv').config()
require('@nomicfoundation/hardhat-toolbox')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.TESTNET_GOERLI_ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}
