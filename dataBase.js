class DataBase{

    constructor(){}

    get(phoneNumber) {
        console.log(phoneNumber);
        return localStorage.getItem(phoneNumber);

    }
    getAll() {
        console.log("5 DATABASE getAll");
        var values = [];
        var keys= Object.keys(localStorage)
        for (let i = 0; i < keys.length; i++) {
          const value = localStorage.getItem(keys[i]);
          values.push(value);
        }
      

        const result = keys.map((item, i) => [item, [values[i]]]);
        console.log(result)
        return JSON.stringify(result);
    }
    put(phoneNumber, data) {
        localStorage.setItem(phoneNumber, data);
    }
    post(phoneNumber, data) {
        console.log("5 DATABASE Create in LOCAL");
        localStorage.setItem(phoneNumber, data);
        console.log("6 DATABASE SUCCESS");
    }
    deletee(phoneNumber) {
        localStorage.removeItem(phoneNumber);
    }    

}