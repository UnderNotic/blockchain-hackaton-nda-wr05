# Blockchain hackaton
Here is stored hyper ledge fabric code to solve nda problem


# Azure VM

Ip: 52.224.163.193

User: teamuser
Pass: Password123*


# Starting
sudo ./basic-network/start.sh

# Commands
`
CORE_PEER_LOCALMSPID=Org1MSP CORE_PEER_MSPCONFIG_PATH=/home/undernotic/workspace/blockchain-hackaton/blockchain-hackaton-nda-wr05/basic-network/crypto-config/peerOrganisations/org1.example.com/users/Admin\@org1.example.com/msp peer channel list
`

Show logs for peer:    
`sudo docker logs -f peer0.org1.example.com `


# Idea

idea!

Permissioning on smart contract level.

Actual data encrypted by secret only know by blockchain.

Data structure:
    CreatedAt: timestamp
{
    EditedAt: timestamps
    Data: encryped paper
}

We cannot use channel for every paper because:
- it will not scale
- If the permissioned users change -> channel should change
- quering all that would not possible for example how many documents are in the system,
when that was created

