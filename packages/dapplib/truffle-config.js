require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain mixture install cricket swear term'; 
let testAccounts = [
"0x15f192274f9199d2fcde76590e868b51adb3bd8afb08154d98bb28df37d27b66",
"0x1b60b3b8e1337d3b68f3de857e9b295ae5c260f0612be59a6fa1f3bc974c8f1b",
"0x56e3378ac0105ffa8352a66a3823f4fcb9a1f7f57a79cfdd3e629c4530a1108b",
"0xb552cd04c62e900b4074ccd84755bd7fcc8a0b242e34227fa838ed6ba77e1b9d",
"0xcd02e3635d9c96680c0d5bac6e4b042cadde945a088e687ae7bffe666db3e4ed",
"0x738d6c493b38cb19d2e9072ae58956ff6c2cbff3417195146cae83d0236c7810",
"0xfe9e29cdf7ff60c5939788ee83683b8cd29607d8daf1c940c2f8c8d1b67a39f7",
"0x9819b5fc4fd8fccfd56adf24c9b6601c9e8b39257a23889a7e59ff93aecc499f",
"0x86cc7c3a2d2701ebfee8f29c44e2bf750665b4bfce57d0111295669633df159d",
"0x704b0569683e317fd65bdfebf345ac2faa56d382430c82c8b19c77a0eec1135d"
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

