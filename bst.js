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
};

var Node = function(key, value){
    this.key = key;
    this.value = value;
    
    this.leftNode = null;
    this.rightNode = null;
}

module.exports = bst;