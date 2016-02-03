var chai = require('chai');
var expect = chai.expect;
var BinaryHeap = require('./../binary-heap')

describe('binary-heap', function(){
   describe('Creates heap by calling insert', function(){
       var bHeap = new BinaryHeap();
       it('Size is zero when initialized', function(){
           expect(bHeap.itemCount()).to.equal(0);     
       })
       
       it('Size is incremented when elements are added', function(){
           bHeap.insert(1);
           expect(bHeap.itemCount()).to.equal(1);
           bHeap.insert(2);
           expect(bHeap.itemCount()).to.equal(2);
           bHeap.insert(3);
           expect(bHeap.itemCount()).to.equal(3);     
       });
       
       it('Deletes max item from top', function(){
           expect(bHeap.pop()).to.equal(3);
           expect(bHeap.pop()).to.equal(2);
           expect(bHeap.pop()).to.equal(1);
           expect(bHeap.itemCount()).to.equal(0);
       })
       
   }) 
});