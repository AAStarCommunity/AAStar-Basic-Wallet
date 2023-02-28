/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SimpleAccount,
  SimpleAccountInterface,
} from "../../../../@account-abstraction/contracts/samples/SimpleAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152503480156200004457600080fd5b5060405162002fdb38038062002fdb83398181016040528101906200006a9190620001fa565b8073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050620000ae620000b560201b60201c565b5062000310565b600060019054906101000a900460ff161562000108576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ff90620002b3565b60405180910390fd5b60ff801660008054906101000a900460ff1660ff1610156200017a5760ff6000806101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff604051620001719190620002f3565b60405180910390a15b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001ae8262000181565b9050919050565b6000620001c282620001a1565b9050919050565b620001d481620001b5565b8114620001e057600080fd5b50565b600081519050620001f481620001c9565b92915050565b6000602082840312156200021357620002126200017c565b5b60006200022384828501620001e3565b91505092915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e69746960008201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b60006200029b6027836200022c565b9150620002a8826200023d565b604082019050919050565b60006020820190508181036000830152620002ce816200028c565b9050919050565b600060ff82169050919050565b620002ed81620002d5565b82525050565b60006020820190506200030a6000830184620002e2565b92915050565b60805160a051612c82620003596000396000818161090301526112750152600081816103ed0152818161047c015281816106b50152818161074401526107f40152612c826000f3fe6080604052600436106100c65760003560e01c806352d1902d1161007f578063b0d691fe11610059578063b0d691fe14610231578063b61d27f61461025c578063c399ec8814610285578063c4d66de8146102b0576100cd565b806352d1902d146101b05780638da5cb5b146101db578063affed0e014610206576100cd565b806318dfb3c7146100d25780633659cfe6146100fb5780633a871cdd146101245780634a58db19146101615780634d44560d1461016b5780634f1ef28614610194576100cd565b366100cd57005b600080fd5b3480156100de57600080fd5b506100f960048036038101906100f49190611963565b6102d9565b005b34801561010757600080fd5b50610122600480360381019061011d9190611a42565b6103eb565b005b34801561013057600080fd5b5061014b60048036038101906101469190611b00565b610574565b6040516101589190611b7e565b60405180910390f35b6101696105be565b005b34801561017757600080fd5b50610192600480360381019061018d9190611bd7565b610633565b005b6101ae60048036038101906101a99190611d58565b6106b3565b005b3480156101bc57600080fd5b506101c56107f0565b6040516101d29190611dc3565b60405180910390f35b3480156101e757600080fd5b506101f06108a9565b6040516101fd9190611ded565b60405180910390f35b34801561021257600080fd5b5061021b6108cf565b6040516102289190611b7e565b60405180910390f35b34801561023d57600080fd5b506102466108ff565b6040516102539190611e67565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e9190611ed8565b610927565b005b34801561029157600080fd5b5061029a610984565b6040516102a79190611b7e565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d29190611a42565b610a0c565b005b6102e1610b4c565b818190508484905014610329576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032090611fa9565b60405180910390fd5b60005b848490508110156103e4576103d185858381811061034d5761034c611fc9565b5b90506020020160208101906103629190611a42565b600085858581811061037757610376611fc9565b5b90506020028101906103899190612007565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c1b565b80806103dc90612099565b91505061032c565b5050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16141561047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190612154565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104b9610c9f565b73ffffffffffffffffffffffffffffffffffffffff161461050f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610506906121e6565b60405180910390fd5b61051881610cf6565b61057181600067ffffffffffffffff81111561053757610536611c2d565b5b6040519080825280601f01601f1916602001820160405280156105695781602001600182028036833780820191505090505b506000610d01565b50565b600061057e610e6f565b6105888484610ee6565b9050600084806040019061059c9190612007565b905014156105ae576105ad84610fc4565b5b6105b782611072565b9392505050565b6105c66108ff565b73ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b81526004016105ff9190611ded565b6000604051808303818588803b15801561061857600080fd5b505af115801561062c573d6000803e3d6000fd5b5050505050565b61063b61110e565b6106436108ff565b73ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b815260040161067d929190612215565b600060405180830381600087803b15801561069757600080fd5b505af11580156106ab573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610742576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073990612154565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610781610c9f565b73ffffffffffffffffffffffffffffffffffffffff16146107d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ce906121e6565b60405180910390fd5b6107e082610cf6565b6107ec82826001610d01565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614610880576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610877906122b0565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160009054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff16905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b61092f610b4c565b61097e848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c1b565b50505050565b600061098e6108ff565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109c69190611ded565b602060405180830381865afa1580156109e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0791906122e5565b905090565b60008060019054906101000a900460ff16159050808015610a3d5750600160008054906101000a900460ff1660ff16105b80610a6a5750610a4c306111d6565b158015610a695750600160008054906101000a900460ff1660ff16145b5b610aa9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa090612384565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610ae6576001600060016101000a81548160ff0219169083151502179055505b610aef826111f9565b8015610b485760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610b3f91906123ec565b60405180910390a15b5050565b610b546108ff565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610bda57506001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610c19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1090612453565b60405180910390fd5b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610c4491906124ed565b60006040518083038185875af1925050503d8060008114610c81576040519150601f19603f3d011682016040523d82523d6000602084013e610c86565b606091505b509150915081610c9857805160208201fd5b5050505050565b6000610ccd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6112d9565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610cfe61110e565b50565b610d2d7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b6112e3565b60000160009054906101000a900460ff1615610d5157610d4c836112ed565b610e6a565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610db957506040513d601f19601f82011682018060405250810190610db69190612519565b60015b610df8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610def906125b8565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114610e5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e549061264a565b60405180910390fd5b50610e698383836113a6565b5b505050565b610e776108ff565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ee4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edb906126b6565b60405180910390fd5b565b600080610ef2836113d2565b9050610f5a84806101400190610f089190612007565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508261140290919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff166001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fb8576001915050610fbe565b60009150505b92915050565b80602001356001600081819054906101000a90046bffffffffffffffffffffffff1680929190610ff3906126ee565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff161461106f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110669061276f565b60405180910390fd5b50565b6000811461110b5760003373ffffffffffffffffffffffffffffffffffffffff16827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff906040516110c2906127b5565b600060405180830381858888f193505050503d8060008114611100576040519150601f19603f3d011682016040523d82523d6000602084013e611105565b606091505b50509050505b50565b6001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061119557503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6111d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111cb90612816565b60405180910390fd5b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b806001600c6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de60405160405180910390a350565b6000819050919050565b6000819050919050565b6112f6816111d6565b611335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132c906128a8565b60405180910390fd5b806113627f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6112d9565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6113af83611429565b6000825111806113bc5750805b156113cd576113cb8383611478565b505b505050565b6000816040516020016113e59190612940565b604051602081830303815290604052805190602001209050919050565b600080600061141185856114a5565b9150915061141e816114f7565b819250505092915050565b611432816112ed565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606061149d8383604051806060016040528060278152602001612c2660279139611665565b905092915050565b6000806041835114156114e75760008060006020860151925060408601519150606086015160001a90506114db878285856116eb565b945094505050506114f0565b60006002915091505b9250929050565b6000600481111561150b5761150a612966565b5b81600481111561151e5761151d612966565b5b141561152957611662565b6001600481111561153d5761153c612966565b5b8160048111156115505761154f612966565b5b1415611591576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611588906129e1565b60405180910390fd5b600260048111156115a5576115a4612966565b5b8160048111156115b8576115b7612966565b5b14156115f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f090612a4d565b60405180910390fd5b6003600481111561160d5761160c612966565b5b8160048111156116205761161f612966565b5b1415611661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165890612adf565b60405180910390fd5b5b50565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161168f91906124ed565b600060405180830381855af49150503d80600081146116ca576040519150601f19603f3d011682016040523d82523d6000602084013e6116cf565b606091505b50915091506116e0868383876117ce565b925050509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156117265760006003915091506117c5565b60006001878787876040516000815260200160405260405161174b9493929190612b0e565b6020604051602081039080840390855afa15801561176d573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156117bc576000600192509250506117c5565b80600092509250505b94509492505050565b6060831561183157600083511415611829576117e9856111d6565b611828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181f90612b9f565b60405180910390fd5b5b82905061183c565b61183b8383611844565b5b949350505050565b6000825111156118575781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188b9190612c03565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126118cd576118cc6118a8565b5b8235905067ffffffffffffffff8111156118ea576118e96118ad565b5b602083019150836020820283011115611906576119056118b2565b5b9250929050565b60008083601f840112611923576119226118a8565b5b8235905067ffffffffffffffff8111156119405761193f6118ad565b5b60208301915083602082028301111561195c5761195b6118b2565b5b9250929050565b6000806000806040858703121561197d5761197c61189e565b5b600085013567ffffffffffffffff81111561199b5761199a6118a3565b5b6119a7878288016118b7565b9450945050602085013567ffffffffffffffff8111156119ca576119c96118a3565b5b6119d68782880161190d565b925092505092959194509250565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a0f826119e4565b9050919050565b611a1f81611a04565b8114611a2a57600080fd5b50565b600081359050611a3c81611a16565b92915050565b600060208284031215611a5857611a5761189e565b5b6000611a6684828501611a2d565b91505092915050565b600080fd5b60006101608284031215611a8b57611a8a611a6f565b5b81905092915050565b6000819050919050565b611aa781611a94565b8114611ab257600080fd5b50565b600081359050611ac481611a9e565b92915050565b6000819050919050565b611add81611aca565b8114611ae857600080fd5b50565b600081359050611afa81611ad4565b92915050565b600080600060608486031215611b1957611b1861189e565b5b600084013567ffffffffffffffff811115611b3757611b366118a3565b5b611b4386828701611a74565b9350506020611b5486828701611ab5565b9250506040611b6586828701611aeb565b9150509250925092565b611b7881611aca565b82525050565b6000602082019050611b936000830184611b6f565b92915050565b6000611ba4826119e4565b9050919050565b611bb481611b99565b8114611bbf57600080fd5b50565b600081359050611bd181611bab565b92915050565b60008060408385031215611bee57611bed61189e565b5b6000611bfc85828601611bc2565b9250506020611c0d85828601611aeb565b9150509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c6582611c1c565b810181811067ffffffffffffffff82111715611c8457611c83611c2d565b5b80604052505050565b6000611c97611894565b9050611ca38282611c5c565b919050565b600067ffffffffffffffff821115611cc357611cc2611c2d565b5b611ccc82611c1c565b9050602081019050919050565b82818337600083830152505050565b6000611cfb611cf684611ca8565b611c8d565b905082815260208101848484011115611d1757611d16611c17565b5b611d22848285611cd9565b509392505050565b600082601f830112611d3f57611d3e6118a8565b5b8135611d4f848260208601611ce8565b91505092915050565b60008060408385031215611d6f57611d6e61189e565b5b6000611d7d85828601611a2d565b925050602083013567ffffffffffffffff811115611d9e57611d9d6118a3565b5b611daa85828601611d2a565b9150509250929050565b611dbd81611a94565b82525050565b6000602082019050611dd86000830184611db4565b92915050565b611de781611a04565b82525050565b6000602082019050611e026000830184611dde565b92915050565b6000819050919050565b6000611e2d611e28611e23846119e4565b611e08565b6119e4565b9050919050565b6000611e3f82611e12565b9050919050565b6000611e5182611e34565b9050919050565b611e6181611e46565b82525050565b6000602082019050611e7c6000830184611e58565b92915050565b60008083601f840112611e9857611e976118a8565b5b8235905067ffffffffffffffff811115611eb557611eb46118ad565b5b602083019150836001820283011115611ed157611ed06118b2565b5b9250929050565b60008060008060608587031215611ef257611ef161189e565b5b6000611f0087828801611a2d565b9450506020611f1187828801611aeb565b935050604085013567ffffffffffffffff811115611f3257611f316118a3565b5b611f3e87828801611e82565b925092505092959194509250565b600082825260208201905092915050565b7f77726f6e67206172726179206c656e6774687300000000000000000000000000600082015250565b6000611f93601383611f4c565b9150611f9e82611f5d565b602082019050919050565b60006020820190508181036000830152611fc281611f86565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261202457612023611ff8565b5b80840192508235915067ffffffffffffffff82111561204657612045611ffd565b5b60208301925060018202360383131561206257612061612002565b5b509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120a482611aca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156120d7576120d661206a565b5b600182019050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b600061213e602c83611f4c565b9150612149826120e2565b604082019050919050565b6000602082019050818103600083015261216d81612131565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b60006121d0602c83611f4c565b91506121db82612174565b604082019050919050565b600060208201905081810360008301526121ff816121c3565b9050919050565b61220f81611b99565b82525050565b600060408201905061222a6000830185612206565b6122376020830184611b6f565b9392505050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b600061229a603883611f4c565b91506122a58261223e565b604082019050919050565b600060208201905081810360008301526122c98161228d565b9050919050565b6000815190506122df81611ad4565b92915050565b6000602082840312156122fb576122fa61189e565b5b6000612309848285016122d0565b91505092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061236e602e83611f4c565b915061237982612312565b604082019050919050565b6000602082019050818103600083015261239d81612361565b9050919050565b6000819050919050565b600060ff82169050919050565b60006123d66123d16123cc846123a4565b611e08565b6123ae565b9050919050565b6123e6816123bb565b82525050565b600060208201905061240160008301846123dd565b92915050565b7f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74600082015250565b600061243d602083611f4c565b915061244882612407565b602082019050919050565b6000602082019050818103600083015261246c81612430565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156124a757808201518184015260208101905061248c565b838111156124b6576000848401525b50505050565b60006124c782612473565b6124d1818561247e565b93506124e1818560208601612489565b80840191505092915050565b60006124f982846124bc565b915081905092915050565b60008151905061251381611a9e565b92915050565b60006020828403121561252f5761252e61189e565b5b600061253d84828501612504565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b60006125a2602e83611f4c565b91506125ad82612546565b604082019050919050565b600060208201905081810360008301526125d181612595565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b6000612634602983611f4c565b915061263f826125d8565b604082019050919050565b6000602082019050818103600083015261266381612627565b9050919050565b7f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000600082015250565b60006126a0601c83611f4c565b91506126ab8261266a565b602082019050919050565b600060208201905081810360008301526126cf81612693565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b60006126f9826126d6565b91506bffffffffffffffffffffffff8214156127185761271761206a565b5b600182019050919050565b7f6163636f756e743a20696e76616c6964206e6f6e636500000000000000000000600082015250565b6000612759601683611f4c565b915061276482612723565b602082019050919050565b600060208201905081810360008301526127888161274c565b9050919050565b50565b600061279f60008361247e565b91506127aa8261278f565b600082019050919050565b60006127c082612792565b9150819050919050565b7f6f6e6c79206f776e657200000000000000000000000000000000000000000000600082015250565b6000612800600a83611f4c565b915061280b826127ca565b602082019050919050565b6000602082019050818103600083015261282f816127f3565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000612892602d83611f4c565b915061289d82612836565b604082019050919050565b600060208201905081810360008301526128c181612885565b9050919050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000612909601c836128c8565b9150612914826128d3565b601c82019050919050565b6000819050919050565b61293a61293582611a94565b61291f565b82525050565b600061294b826128fc565b91506129578284612929565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b60006129cb601883611f4c565b91506129d682612995565b602082019050919050565b600060208201905081810360008301526129fa816129be565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000612a37601f83611f4c565b9150612a4282612a01565b602082019050919050565b60006020820190508181036000830152612a6681612a2a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000612ac9602283611f4c565b9150612ad482612a6d565b604082019050919050565b60006020820190508181036000830152612af881612abc565b9050919050565b612b08816123ae565b82525050565b6000608082019050612b236000830187611db4565b612b306020830186612aff565b612b3d6040830185611db4565b612b4a6060830184611db4565b95945050505050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612b89601d83611f4c565b9150612b9482612b53565b602082019050919050565b60006020820190508181036000830152612bb881612b7c565b9050919050565b600081519050919050565b6000612bd582612bbf565b612bdf8185611f4c565b9350612bef818560208601612489565b612bf881611c1c565b840191505092915050565b60006020820190508181036000830152612c1d8184612bca565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122017e0784e01a55528b98be9dfd2aea1114395472e0c6d4da0c42113f5183cb6eb64736f6c634300080c0033";

type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<SimpleAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccount {
    return super.attach(address) as SimpleAccount;
  }
  override connect(signer: Signer): SimpleAccount__factory {
    return super.connect(signer) as SimpleAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountInterface {
    return new utils.Interface(_abi) as SimpleAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccount {
    return new Contract(address, _abi, signerOrProvider) as SimpleAccount;
  }
}