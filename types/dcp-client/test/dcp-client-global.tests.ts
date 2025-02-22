/**
 * @file Tests using the UMD module as a global in the browser..
 */

const { compute, wallet, worker } = dcp;

// $ExpectType Compute
compute;
// $ExpectType Wallet
wallet;
// $ExpectType Worker
worker;

const { Keystore } = wallet;

// $ExpectType Keystore
new Keystore();
// $ExpectType Keystore
new Keystore(null, '');
