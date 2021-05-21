const sharedThingMethods = {
  setName(name) {
    this.name = name;
    return this;
  },
};
function Thing(name) {
  const thing = Object.create(sharedThingMethods);
  thing.name = name;
  return thing;
}
const thing1 = Thing("Aaron");

console.dir(thing1);
