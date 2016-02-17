var bst = function(){
    this.root = null;
    
    this.put = function(key, value){
        this.root = putNode(this.root, key, value);
    }
    
    var putNode = function(node, key, value){
        if(node == null)
            return new Node(key, value);
        if(node.key > key)
            node.leftNode = putNode(node.leftNode, key, value);
        else if(node.key < key)
            node.rightNode = putNode(node.rightNode, key, value);
        else
            node.value = value;
        return node;
    }
    
    this.getValue = function(key, optionalParam){
        if(!optionalParam){
            return getValueRecursive(this.root, key);
        }
        return getValueInLop(this.root, key);
    }
    
    this.count = function(){
        return countRecursive(this.root);
    }
    
    var countRecursive = function(node){
        if(node == null)
            return 0;
        return 1 + countRecursive(node.leftNode) + countRecursive(node.rightNode);
    }
    
    // Recusrive implementation of search!
    var getValueRecursive = function(node, key){
        if(node == null)
            throw "Key not found";
        if(node.key == key)
            return node.value;
        if(node.key > key)
            return getValueRecursive(node.leftNode, key);
        return getValueRecursive(node.rightNode, key);
    }
    
    // Loop implementation of search!
    var getValueInLop = function(root, key){
        var node = root;
        while(node != null){
            if(node.key == key)
                return node.value;
            if(node.key > key)
                node = node.leftNode;
            else
                node = node.rightNode;
        };
        throw "Key not found";
    };
    
    this.floor = function(key) {
        var result = getFloor(this.root, key);
        if(result == null)
            return null;
         return result.key;
    }
    //highest value which is less than the key
    var getFloor = function(node, key){
        if(node == null)
            return null;
        if(node.key == key)
            return node;
        if(node.key > key)
            return getFloor(node.leftNode, key);
        var t = getFloor(node.rightNode, key);
        if(t != null)
            return t;
        return node;
    }
    
    this.max = function () {
        var result =  getMax(this.root);
        if(result == null)
            return result;
        return result.key;
    }
    
    var getMax = function(node){
        var start = node;
        if(start == null)
            return null;
        while(start.rightNode != null)
            start = start.rightNode;
        return start;
    }
    
    this.min = function () {
        var result =  getMin(this.root);
        if(result == null)
            return result;
        return result.key;
    }
    
    var getMin = function(node){
        var start = node;
        if(start == null)
            return null;
        while(start.leftNode != null)
            start = start.leftNode
        return start;
    }
    
    
    
    this.deleteMin = function(){
        this.root = deleteMinNode(this.root);
    }   
    
    var deleteMinNode = function(node) {        
        if(node == null)
            return null;
        if(node.leftNode == null){
            return node.rightNode;
        }
        node.leftNode = deleteMinNode(node.leftNode);
        return node;
    }
    
    this.delete = function(key){
        this.root = deleteNode(this.root, key)
    }
    
    var deleteNode = function(node, key){
        if(node == null)
            return null;
        if(node.key < key)
            node.rightNode = deleteNode(node.rightNode, key);
        else if(node.key > key)
            node.leftNode = deleteNode(node.leftNode, key);
        else{
            if(node.leftNode == null)
                return node.rightNode;
            if(node.rightNode == null)
                return node.leftNode;             
            
            var nextMin = getMin(node.rightNode);
            nextMin.leftNode = node.leftNode;
            nextMin.rightNode = deleteMinNode(node.rightNode);
            return nextMin;
        }
        return node;
    }
};

var Node = function(key, value){
    this.key = key;
    this.value = value;
    
    this.leftNode = null;
    this.rightNode = null;
}

module.exports = bst;