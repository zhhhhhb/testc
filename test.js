/**
 * Created by 小汤圆加西米露 on 2017/5/19.
 */
var main= require('../../shixian.js');

describe("Word Frequency",function(){
    it("return empty string given empty string",function(){
        var result = main('');
        expect(result).toEqual('');
    });
    it("return string given one word",function(){
        var result = main('he');
        expect(result).toEqual('he 1');
    });
    it("return string given two different words",function(){
        var result = main('he is');
        expect(result).toEqual('he 1\r\nis 1');
    });
    it("return string given duplicated words",function(){
        var result = main('he he is');
        expect(result).toEqual('he 2\r\nis 1');
    });
    it("return string given words splited by multiple space",function(){
        var result = main('he    is');
        expect(result).toEqual('he 1\r\nis 1')
    });
    it("a test",function(){
        var result = main('it was the age of wisdom it was the age of foolishness it is');
        expect(result).toEqual('it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1')
    });