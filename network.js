class Network {
    constructor() {
        this.server=new Server();
    }
    sendRequest(request, phoneNumber, data) {
        console.log("3 network send");
      let server = this.server;
      let result = server.receiveRequest(request, phoneNumber, data);
      console.log("network result"+"  "+result);
      if (result != null) {
        return result;
      }
    }
  }