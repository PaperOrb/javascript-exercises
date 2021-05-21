let findTheOldest = function (people) {
  let oldie = people.reduce(function (oldest, person) {
    dob = person.yearOfBirth;

    if (person.yearOfDeath === undefined) {
      dod = new Date().getFullYear();
    } else {
      dod = person.yearOfDeath;
    }

    person.age = dod - dob;
    return (oldest = person.age > oldest.age ? person : oldest);
  }, people[0]);
  [].splice
  return oldie;
};

module.exports = findTheOldest;
