const myInfo = {
    printIntroduction: function () {
      console.log(`My name is ${this.name}.My job is ${this.job}`);
    }
  };
  
  const newInfo = Object.create(myInfo);//use create method to update existing object
  
  newInfo.name = "Piash"; // "name" is a property set on "newInfo", but not on "person"
  newInfo.job = "Web Developer";
  newInfo.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"


  
  