const employee = require("./employee");

class manager extends employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.github;
    };

    getRole() {
        return "Manager";
    };

}

module.exports = manager