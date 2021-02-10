import { networks } from 'bitcoinjs-lib'
import pkg from '../package.json'
import { BitcoinNetwork } from './types'

const bitcoin: BitcoinNetwork = {
  name: 'bitcoin',
  ...networks.bitcoin,
  coinType: '0',
  isTestnet: false
}

const bitcoin_testnet: BitcoinNetwork = {
  name: 'bitcoin_testnet',
  ...networks.testnet,
  coinType: '1',
  isTestnet: true
}

const bitcoin_regtest: BitcoinNetwork = {
  name: 'bitcoin_regtest',
  ...networks.regtest,
  coinType: '1',
  isTestnet: true
}

export const BitcoinNetworks = {
  bitcoin,
  bitcoin_testnet,
  bitcoin_regtest
}

export const version = pkg.version
