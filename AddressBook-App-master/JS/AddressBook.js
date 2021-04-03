class AddressBook {

    //getter and setter methods :
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        //should start with capitals
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get phoneNumber()
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber)
    {
        let phoneRegex = RegExp('^[\+]?(([0-9]{2})?)[0-9]{10}$');
        if(phoneRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber;
        else throw 'Incorrect Phone number Format';
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^([a-zA-z0-9]{3,}[; ;])*$'); 
        if(addressRegex.test(address))
        this._address = address;
        else throw 'Incorrect Address Fromat';
    }

    get city()
    {
        return this._city;
    }

    set city(city)
    {
        this._city=city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
         this._state = state;
    }

    get zip()
    {
       return this._zip;
    }
    set zip(zip)
    {
       let zipRegex = RegExp('[0-9]{6}');
       if(zipRegex.test(zip))
       this._zip = zip;
       else throw 'Invalid zip format';
    }

    //method 
    toString() {
        return "id =" + this.id + ",name = " + this.name + ",address = " + this.address +
            " ,phoneNumber = " + this.phoneNumber + " ,city = " + this.city +
            " ,state = " + this.state +" ,zip = " + this.zip;
    }
}