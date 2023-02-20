# Planning

The interface will enable non-developers to interact with the Attestation Station. The users will be able to connect their wallets to supported networks. They will also be able to make and read attestations from the deployed Attestation Station smart contract.

## Feature Set

### Wallet Connection (done)

The interface will allow users to connect their wallets to the web application.

### Network Switch (done)

The interface will allow users to switch between different blockchain networks.

The interface will update the smart contract address based on the network that is selected.

_Note: The interface will notify users if they are connected to an unsupported network._

### Make Attestation (done)

The interface will allow users to make attestations. The following data will be required:

- About (address)
- Key (bytes32)
- Value (bytes)

_Note: the user's wallet will need to be connected to a supported network_

### Read Attestation (done)

The interface will allow users to read attestations from the `AttestationStation` contract.

### User Feedback (done, but can be improved)

The interface will provide helpful user feedback on `AttestationStation` contract interactions. This will include, but not limited to:

- [x] Input validation for addresses
- [x] Input validation for key
- [x] Input validation for value
- [x] Transaction broadcasted, etherscan link
- [x] Transaction confirmed, etherscan link
- [x] Key tooltip with more information
- [x] Value tooltip with more information

### My Attestations

The interface will allow users to read the attestations involving their address. They will be able to toggle between ones they have made or the attestations made about them. Attestation Data that will be included is: 

- transaction hash 
- etherscan link
- creator address
- about address
- timestamp
- key UTF format
- key bytes format
- value UTF format
- valute bytes format

### Batched Attestations

The interface will allow users to make batches of attestations in a single blockchain transaction.

## Future Phase Items

These future phase items will probably manifest in a different application. I am currently imagining an indexing component that writes attestations to a database, an api that can read attestation data without querying the blockchain, and a new UI to interact with these modules.

### Attestation Listener

The interface will listen for attestations made on the network and write them to a database.

### Attestation Database

This database will house all attestations made and allow for quicker access and less node interaction costs.

### Attestation API

This api will query the database to provide attestations with simpler request formats. 

### Attestation Explorer

A new interface that will orchestrate the above three modules functionality.
