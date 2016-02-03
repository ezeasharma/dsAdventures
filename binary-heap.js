/*
Binary Heap belongs to the family of priority queues. A priority queue is a structure where it maintains some priority/order. 
Examples:- 
        1. Given infinitely long stream of integers, determine top k elements. You can only allocate k+1 space
        2. Given infinitely long stream of integers, determine bottom k elements. You can only allocate k+1 space.
        3. Create a datastructure that would contain n number of biggest transactions of credit cards throught the day.
            3.1 the sample data coming in could be like "Date", "CardIdentifier", "ShopName", "Amount"
        4. Keep a running count of top k max elements;
            
            
Binary Heap - 
    1. Is a based on complete binary tree idea with the additional requirement that the parent node always contains the element grater than its children.
    2. Timecomplexity is NLog(k) where N is the number of events and k is the size of elements to track.
    3. Its a inplace sorting algorith.
    4. It is not considered as stable coz of the various exchanges. In certain cases, indices could mess up.
    5. Represented as an array with start index as 1 for simplicity.
    6. for an element at index i
        a. Its child are present at index 2*1 and 2*i+1
        b. Its parent is present at i/2
*/ 



var binaryHeap = function(){
    var startIndex = 1;
    var lastIndex = 0;
    var cache = [];
    
    var swimUp = function(index){
        var parentIndex = /*Convert to int */ Math.floor(index/2);
        if(parentIndex == 0)
            return;
        if(cache[parentIndex] < cache[index])
        {
            exchange(parentIndex, index)
            swimUp(parentIndex);
        }
    };
    
    var sinkDown = function(index){
        var biggerChildIndex = getBiggerChildIndex(index);
        if(biggerChildIndex == -1)
            return;
        if(cache[index] < cache[biggerChildIndex])
        {
            exchange(index, biggerChildIndex);
            sinkDown(biggerChildIndex);
        }        
    }
    
    var getBiggerChildIndex = function(parentIndex){
        var child1Index = parentIndex * 2;
        var child2Index = parentIndex * 2 + 1;
        if(child1Index > lastIndex || child2Index > lastIndex)
        {
            if(child1Index > lastIndex && child2Index > lastIndex)
                return -1;
            if(child1Index > lastIndex)
                return child2Index;
            return child1Index;
        }
            
        if(cache[child1Index] > cache[child2Index])
            return child1Index;
        return child2Index;
    };
    
    var exchange = function(index1, index2){
        var item = cache[index1];
        cache[index1] = cache[index2];
        cache[index2] = item;
    };
    
    this.insert = function(item){
        lastIndex++;
        cache[lastIndex] = item;
        swimUp(lastIndex);
    };
    
    this.itemCount = function(){
        return lastIndex;
    };   
    
    this.pop = function(){
        if(lastIndex < startIndex)
            throw "heap is empty";
        var topElement = cache[startIndex];
        exchange(startIndex, lastIndex);
        lastIndex--;
        sinkDown(startIndex);
        return topElement;
    }
};


module.exports = binaryHeap;