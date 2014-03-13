customize-bitcore
=======

#How to use

Run this in the project folder:
```
node index.js
```

And then access the following URL to get the full bundle:
```
http://localhost:3000/download/all
```

To customize the bundle, replace `all` with a list of submodules, as in:
```
http://localhost:3000/download/Address,Transaction
```

The available submodules are:
```
var modules = [
  'Address',
  'Block',
  'Bloom',
  'Buffers.monkey',
  'Connection',
  'Deserialize',
  'Gruntfile',
  'Number.monkey',
  'Opcode',
  'Peer',
  'PeerManager',
  'PrivateKey',
  'RpcClient',
  'Key',
  'SIN',
  'SINKey',
  'Script',
  'ScriptInterpreter',
  'Sign',
  'Transaction',
  'Wallet',
  'WalletKey',
  'config',
  'const',
  'networks',
  'util/log',
  'util/util',
  'util/EncodedData',
  'util/VersionedData',
];

```

