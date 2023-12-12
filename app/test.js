var assert=require('assert')
const { describe } = require('node:test')

describe("subTest",function(){
    describe("subtest1",function(){
        //success test
        it('aaaaaaaaaaa',function(){
            var result = 5+8
            assert.equal(result,13)
        })
    })
    //fail test
    describe("subtest2",function(){
        it('bbbbbbbbbbb',function(){
            var result=8+5
            assert.notEqual(result,13)
        })
    })
})
