class Server{
    constructor(){
        this.db =new DataBase();

    }

    receiveRequest(request,phoneNumber=null,data=null){
        if(request=== "GETALL"){
            return this.getAll();
        }
        else if(request=== "GET"){
            return this.get(phoneNumber);
        }
        else if(request=== "POST"){
            return this.post(phoneNumber,data);
        }
        else if(request=== "PUT"){
            return this.put(phoneNumber,data);
        }
        else if(request=== "DELETE"){
            return this.del(phoneNumber);
        }
        else{
            alert("wrong request : "+ request)
            return false;
        }  
    }

    get(phoneNumber) {
        return this.db.get(phoneNumber);
    }
    getAll() {
        return this.db.getAll();
    }
    post(phoneNumber, data) {
        console.log("4 server POST to DB ");
        this.db.post(phoneNumber, data);
        console.log("7 server return");
    }
    put(phoneNumber, data) {
        this.db.put(phoneNumber, data);
    }
    del(phoneNumber) {
        this.db.deletee(phoneNumber);
    }     
}