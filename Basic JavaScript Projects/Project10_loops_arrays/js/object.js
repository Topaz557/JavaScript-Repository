let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description : function() {
        return "The car is a " +this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();