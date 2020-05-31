import {GenerateRandomString} from './RandomString'

test("It throws error when calling to generate random string", ()=>{
  expect(function(){GenerateRandomString(32);})
    .toThrow(new Error("Your are using an unsupported browser."))
})

test("It generate random string", ()=>{
  // mock window.crypto (not sure the best approach but works)
  const crypto = require('crypto');
  // @ts-ignore
  Object.defineProperty(global.self, 'crypto', {
    value: {
      // @ts-ignore
      getRandomValues: arr => crypto.randomBytes(arr.length)
    }
  });

  const rand = GenerateRandomString(16)
  expect(rand).toHaveLength(16)
})