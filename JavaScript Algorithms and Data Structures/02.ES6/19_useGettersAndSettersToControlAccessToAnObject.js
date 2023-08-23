// Only change code below this line
class Thermostat {
    constructor(tempFahrenheit) {
        this._temp = 5 / 9 * (tempFahrenheit - 32);
    }
    // getter
    get temperature() {
        return this._temp;
    }
    // setter
    set temperature(updatedTemp) {
        this._temp = updatedTemp;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius