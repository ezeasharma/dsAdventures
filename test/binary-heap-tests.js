var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var BinaryHeap = require('./../binary-heap')

describe('binary-heap', function(){
   describe('datastructure', function(){
       var bHeap = new BinaryHeap();
       it('Size is zero when initialized', function(){
           expect(bHeap.itemCount()).to.equal(0);     
       });
       
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
       }); 
       
       it('pop throws exception if heap is empty', function(){
           try
           {
                bHeap.pop()
                assert.fail();   
           }
           catch(e){
               assert.ok("caught exception");
           }
           
       });
       
       it('heapSort returns the sorted array set', function(){
           expect(bHeap.itemCount()).to.equal(0);
           bHeap.insert(12);bHeap.insert(9);bHeap.insert(11);bHeap.insert(10);bHeap.insert(1);bHeap.insert(2);
           bHeap.insert(5);bHeap.insert(3);bHeap.insert(6);bHeap.insert(4);bHeap.insert(8);bHeap.insert(7);
           
           expect(bHeap.heapSort()).to.eql([12, 11, 10, 9, 8, 7, 6, 5 ,4, 3, 2, 1]);
       })
   });
});