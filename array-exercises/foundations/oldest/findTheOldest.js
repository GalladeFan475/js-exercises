function getAge(birth, death) {
  if (!death) {
    death = 2025;
  }
  return death - birth;
}

const findTheOldest = function (arr) {
  return arr.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
