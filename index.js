 //% Oggetti



    //* Conversione chiave in stringa
    /*
    let object = {
        "key" : "key",
    }
    console.log(object.key); // key
    */

    //* Proprietà dinamiche
    /*
    const name = "non saprei";
    let object = {
        [name] : "Edoardo"
    }
    console.log(object[name]); // Edoardo
    console.log(name); // non saprei
    */

    //* Nome chiave e valore uguali

    /* let age = 30;
    let object = {
        name : "name",
        age
    }
    console.log(object.age); */ //30




    //, Operazioni in un oggetto

    /*
    let house = {
        mq: 132,
        "address": "32 Boulevard st.",
        garden: false,
        rooms: ["kitchen", "bathroom", "bedroom", "small bedroom", "hallway"],
        roommates: [
            {
            name: "Anna",
            age: 36
            },
            {
            name: "Francesco",
            age: 40
            },
        ],
    }
    */
    //, Accedere agli oggetti
    //console.log(house.mq); // 132
    //console.log(house.rooms[3]); //small bedroom

    //, Accedere agli oggetti innestati
    //console.log(house.roommates[1].age); // 40

    //, Ordine proprietà
    //console.log(house);
    //console.table(house);

    //, Aggiungere proprietà fuori dall'oggetto
    //house.color = "blue";
    //console.log(house.color);

    //, Sovrascrivere proprietà fuori dall'oggetto
    /*
    console.log(house.garden); // false
    house.garden = true;
    console.log(house.garden); // true
    */

    //, Eliminare proprietà dall'oggetto
    /*
    console.log(house);
    delete house.roommates;
    delete house.rooms;
    console.log(house);
    */

    /* delete house;
    console.log(house.address); */

    //, Accedere alle proprietà di un oggetto
    /*
    let user = {
        "name": 'John',
        10: "Ciao",
        "not my age": 20,
    }

    //console.log(user.10); //Ciao
    console.log(user[10]); //Ciao
    console.log(user[2*5]); //Ciao
    console.log(user[100/10]); //Ciao
    //console.log(user.not my age); //20
    console.log(user["not my age"]); //20

    let saluta = "name";
    console.log(user.saluta);//undefined
    console.log(user[saluta]);//John
    console.log(user["name"]);//John

    */