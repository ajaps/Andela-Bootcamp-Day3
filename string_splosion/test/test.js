
  'use strict';
const myApp = require('../app/index.js');
let StringSplosion = myApp.StringSplosion;
describe(" String splosion", function(){
    it("should return 'invalid input' for 123", function(){
        var stringSplosion = new StringSplosion(123);
        expect(stringSplosion.manipulate()).toEqual("invalid input");
    });

    it("should return 'invalid input' for ['a',45,'food']", function(){
        var stringSplosion = new StringSplosion(['a',45,'food']);
        expect(stringSplosion.manipulate()).toEqual("invalid input");
    });

    it("should return 'invalid input' for {a:2, name:'frank'}", function(){
        var stringSplosion = new StringSplosion({a:2, name:'frank'});
        expect(stringSplosion.manipulate()).toEqual("invalid input");
    });

    it("should return 'invalid input' for true", function(){
        var stringSplosion = new StringSplosion(true);
        expect(stringSplosion.manipulate()).toEqual("invalid input");
    });

    it("should return 'invalid input' for null", function(){
        var stringSplosion = new StringSplosion(null);
        expect(stringSplosion.manipulate()).toEqual("invalid input");
    });

    it("should manipulate the string", function(){
        var stringSplosion = new StringSplosion("Code");
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
    });

    it("should manipulate the string not return the expected result, 1.", function(){
        var stringSplosion = new StringSplosion("Code");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
        expect(functionString.indexOf('CCoCodCode')).toBe(-1);
    });

    it("should manipulate a second time", function(){
        var stringSplosion = new StringSplosion("abc");
        expect( stringSplosion.manipulate()).toEqual("aababc");
    });

    it("should manipulate a third time", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });

     it("should manipulate the string not return the expected result, 2.", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect( stringSplosion.manipulate()).toEqual("aanandandeandelandela");
        expect(functionString.indexOf('aanandandeandelandela')).toBe(-1);
    });
});