# Planning

The interface will enable non-developers to interact with the Attestation Station. The users will be able to connect their wallets to supported networks. They will also be able to make and read attestations from the deployed Attestation Station smart contract.

## Feature Set

### Wallet Connection

The interface will allow users to connect their wallets to the web application.

### Network Switch

The interface will allow users to switch between different blockchain networks.

_Note: The interface will notify users if they are connected to an unsupported network._

### Make Attestation

The interface will allow users to make attestations. The following data will be required:

- About (address)
- Key (bytes32)
- Value (bytes)

_Note: the user's wallet will need to be connected to a supported network_

### Read Attestation

The interface will allow users to read attestations from the `AttestationStation` contract.

## Future Phase Items

### Attestation Listener

The interface will listen for attestations made on the network and show them as they are written.

### Attestation Explorer

The interface will allow users to read all the attestation keys and values made about addresses they provide.
