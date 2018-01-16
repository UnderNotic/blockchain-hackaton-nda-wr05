# Blockchain hackaton
Here is stored hyper ledge fabric code to solve nda problem

# Azure VM

Ip: 52.224.163.193

User: teamuser
Pass: Password123*

# Starting
`https://hyperledger-fabric.readthedocs.io/en/v1.1.0-preview/write_first_app.html`

# Commands
Show logs for peer:   PEER   
`sudo docker logs -f peer0.org1.example.com`

Start cluster:
`./startFabric.sh node`

Stop cluster:
basic-network `./stop.sh`

# Idea
Permissioning on smart contract level.

Actual data encrypted by secret only know by blockchain.

Data structure:
    CreatedAt: timestamp
    EditedAt: timestamps
    Data: encryped paper
    SignaturesNeeded:
    Signatures:
    Signed: can watch and signed document
    ReadOnly: can only watch life cycle


We cannot use channel for every paper because:
- it will not scale
- If the permissioned users change -> channel should change
- quering all that would not possible for example how many documents are in the system,
when that was created


# NDA Lifecycle
Life Cycle:
-  Request/Edit
    - upload a pdf
    - list of users who can view 
    - list of users who can edit
    - list of user who need to to assign
- Draft
    - upload new pdfs
- Sign
    - Pdf awaiting for signing
- Approved
    - Triggered when all signers signed pdf

# UI
- Login screen (one input box for login name) view
- Uploading pdf with all data watch nda lifecycle view
- Editing pdf (same as uploading) view
- Signing pdf view
- Approved view
- General view showing all ndas and lifecycle state
