class Fajax{

    constructor(){
        this.request=null;
        this.phoneNumber=null;
        this.data=null;
        this.network=new Network();
        this.response=null;
    }

    create_request(request,phoneNumber=null,data=null){
        this.request=request;
        this.phoneNumber=phoneNumber;
        this.data=data;

        console.log("1 fajax create");
    }

    send(callback=null){
        setTimeout(()=>{            //   PR FAIRE UN TMP DE DIFERENCE SI IL EST TROP LENT SA CONTINUE DE LIRE MON CODE 
            console.log("type of callback "+typeof(mycallback))
            console.log("2 fajax send");
            this.response= this.network.sendRequest(this.request,this.phoneNumber,this.data);
            console.log("10 fajax return"+ " "+this.response);
            // callbak
            if (callback==DisplayList){
                try
                {
                    JSON.parse(this.response);
                    callback(JSON.parse(this.response));
                }
                catch(error){
                    callback(this.response);
                }
            }else if (callback==RemoveTemplate){
                callback()
            }
            
                

        },1000)
    }
    
    getResponse(){
        
        return this.response;
    }
}