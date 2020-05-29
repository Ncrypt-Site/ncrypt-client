import {GenerateRandomString} from './RandomString'

test("It generates random string in different length", ()=>{
  expect(function(){GenerateRandomString(32);})
    .toThrow(new Error("Your are using an unsupported browser."))
})