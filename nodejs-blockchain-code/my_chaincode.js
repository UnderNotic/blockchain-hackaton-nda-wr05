udi const shim = require("fabric-shim");

class Chaincode{
    async Init(stub){
        let ret = stub.getFunctionAndParameters();

        let args = ret.params;

        return shim.success(Buffer.from("Initialize Success"));
    }

    async Invoke(stub){
        let ret = stub.getFunctionAndParameters();
        let fcn = this[ret.fcn];
        return fcn(stub, ret.params);
    }

    async helloWorldFunction(stub, args){
        //await stub.getState(key);
        //await stub.putState(key, value from buffer);
        return shim.success(Buffer.from("Hello World!!!"));
    }

    async createNda(stub){

    }

    async queryAllNdas(stub){

    }

    async queryMineNdas(stub){
        
    }
}

shim.start(new Chaincode());