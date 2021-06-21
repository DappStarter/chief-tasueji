require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush struggle cost soccer protect heavy end army gasp'; 
let testAccounts = [
"0xf04d490b41311c547bc8d39e7cb30f1fe7c9b8756e07cc621f34c11635fa1c86",
"0x6e52430ef8a4852439e6fdd8d6f49d12db9d96cc79916fc60081bf38b8dabac9",
"0xf1076765f19d1303bda2f3b0b57fdafd26431204d77e4a01f02ed6968e25f641",
"0xe1b073bef2fa0f570a8a5707f9dc378e189557aa4e3e0618916191f367a777c3",
"0xc3db225ff1f31ceebe4f0a21451d677b8719f23a9d54a144c750c68b851cf05a",
"0xbb4a2812e70c498420367285708952666af014a15f5ebfe9c407abb290d5e96b",
"0x3854acd49560ac9ae2d33d337a52ca4287ff0d7a8a912708ab818c767cb631b9",
"0x93f6cc1ae70fa6986e1501c3c6fe3da2da23e48b0d213ab4f73d7f7d64aec9db",
"0xfe450e874aa296ebcee40f659e4893d2fa26ab7b4e7d5dbbb3ffc16e0f7a6568",
"0x3e14e54478af5cc7b57a4ae2941ec0fe3e7ca62f52c99f3373140d8fe032d2ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

