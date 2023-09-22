function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let ownProps = [];
let canary = new Bird("Tweety");
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
// Only change code below this line
