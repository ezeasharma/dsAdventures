var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var BST = require('./../bst');

describe('BST', function(){
    describe('Initialization', function(){
        var bst = new BST();
        it('Creates an empty bst', function()
        {            
            expect(bst.count()).to.be.equal(0);
        });
    });
    
    describe('put', function(){
        var bst = new BST();
        it('Adds element to the bst', function()
        {            
            bst.put(1, 1);
            expect(bst.count()).to.be.equal(1);
            bst.put(5, 5);
            bst.put(3, 3);
            bst.put(4, 4);
            bst.put(2, 2);
            expect(bst.count()).to.be.equal(5);
            
        });
        
        it('updates the value if key is alreay present', function () {
            bst.put(2, 2);  //Updates the value
            expect(bst.count()).to.be.equal(5);
        })
    });
    
    describe('getValue',function() {
        it('finds the value', function(){
            var bst = new BST();
            bst.put(1, 1);
            bst.put(5, 5);
            bst.put(3, 3);
            bst.put(4, 4);
            bst.put(2, 2);
            expect(bst.count()).to.be.equal(5);
            
            expect(bst.getValue(1)).to.be.equal(1);
            expect(bst.getValue(2)).to.be.equal(2);
            expect(bst.getValue(3)).to.be.equal(3);
            expect(bst.getValue(4)).to.be.equal(4);
            expect(bst.getValue(5)).to.be.equal(5);
            try{
                bst.getValue(6);
            }
            catch(e){
                expect(e).to.be.equal("Key not found");
            }
            
            expect(bst.getValue(1, "Loop")).to.be.equal(1);
            expect(bst.getValue(2, "Loop")).to.be.equal(2);
            expect(bst.getValue(3, "Loop")).to.be.equal(3);
            expect(bst.getValue(4, "Loop")).to.be.equal(4);
            expect(bst.getValue(5, "Loop")).to.be.equal(5);
            try{
                bst.getValue(6, "Loop");
            }
            catch(e){
                expect(e).to.be.equal("Key not found");
            }
        });
    });
    
    describe('min', function() {
        it('returns the minimum element', function () {
            var bst = new BST();
            bst.put(1, 1);
            bst.put(5, 5);
            bst.put(3, 3);
            bst.put(4, 4);
            bst.put(2, 2);
            expect(bst.min()).to.be.equal(1);
        });
    });
    
    describe('min', function() {
        it('returns the minimum element', function () {
            var bst = new BST();
            bst.put(1, 1);
            bst.put(5, 5);
            bst.put(3, 3);
            bst.put(4, 4);
            bst.put(2, 2);
            expect(bst.max()).to.be.equal(5);
            bst.put(100, 100);
            expect(bst.max()).to.be.equal(100);
        });
    });
    
    describe('floor', function() {
        it('returns the minimum element greater than or equal to key', function () {
            var bst = new BST();
            bst.put(1, 1);
            bst.put(5, 5);
            bst.put(3, 3);
            bst.put(2, 2);
            expect(bst.floor(4)).to.be.equal(3);
            expect(bst.floor(6)).to.be.equal(5);
            bst.put(100, 100);
            expect(bst.floor(100)).to.be.equal(100);
            expect(bst.floor(101)).to.be.equal(100);
        });
    });
    
    describe('deleteMin', function() {
        it('removes the min key node', function () {
            var bst = new BST();
            bst.put(1, 1);
            bst.put(5, 5);
            bst.put(3, 3);
            bst.put(2, 2);
            bst.put(100, 100);
            expect(bst.count()).to.be.equal(5);
            bst.deleteMin();
            bst.deleteMin();
            expect(bst.count()).to.be.equal(3);            
        });
    });
    
    describe('delete', function() {
        it('deletes the element with given key', function () {
            var bst = new BST();
            bst.put(2, 2);
            bst.put(1, 1);
            bst.put(3, 3);
            bst.put(4, 4);
            bst.put(100, 100);
            expect(bst.count()).to.be.equal(5);
            bst.delete(4);
            bst.delete(100);
            expect(bst.count()).to.be.equal(3);
            bst.delete(100);            
            expect(bst.count()).to.be.equal(3);
        });
    });
    
    
});