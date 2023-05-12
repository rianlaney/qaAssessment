const { Type } = require("selenium-webdriver/lib/logging");
const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  let newArr = [1,2,3,4]

  test('test shuffle', ()=>{
    expect(Array.isArray(shuffle(newArr))).toBe(true)
  }),
  test('test shuffle contains same values', ()=>{
    let shuffledArr = shuffle(newArr)
    let contains = ()=> {
      for(i=0; i<shuffledArr.length; i++){
        if(!newArr.includes(shuffledArr[i])){
          return false
        } 
      }
      return true
    }
    expect(
      contains().toBe(true)
    )
  })
});
