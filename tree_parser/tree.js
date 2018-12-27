class Node 
{ 
    constructor(data,type) 
    { 
        this.data = data; 
        this.type=type;
        this.num_child=0;
        this.previous=null;
        this.direction=[];
        this.height=0
    } 
} 
class Tree 
{ 
	constructor() 
	{  
        this.root = null; 
        this.current=null;
        this.child=null;
	} 
    insert(data,type) 
    { 
        var newNode = new Node(data,type); 
        if(this.root === null){
            this.root = newNode;
            this.current=newNode;
            console.log("root node inserted sucessfuly") 
        }
        else
            this.insertNode(this.current, newNode); 
    } 
    insertNode(node, newNode) 
    {
        if(node.num_child>0){
            var child=node.direction;
            if(child[0].type==newNode.type|node.num_child>0){        //multiple child insertion
                console.log("MULTIPLE CHILDS")
                
                var arr_str=child[0].data.match(/"element":{/)
                if(arr_str){
                    child[0].data=child[0].data.replace('"element":','"element":[');//adding [ to oth child if there is multiple childs
                }
                newNode.data=newNode.data.replace('"element":{','{');
            }
        }
        var n=node.num_child++;
        newNode.previous=this.current;
        node.direction[n]=newNode;
        this.current=newNode;
        console.log(newNode.type," inserted successfuly")
        if(newNode.type=="text"){
            newNode.height=3
        }
    }
    close_tag(node,data){
        if(node.type==data){
            console.log("closing ",node.type," tag")
            this.current=node.previous
         }
        else
            console.log("MISSING OPEN TAG OF",data,node.type)
    } 
    // Performs preorder traversal of a tree 
    display_tree(node) 
    { 
         var i=0;
        if(node != null) 
        { 
            console.log(node.data);
            for(i=0;i<=node.num_child;i++) {
                this.display_tree(node.direction[i]);
            }
        } 
    } 
    writeToJson(node){
        var i=0;
        if(node != null) 
        { 
            if(node.type==this.root.type)
                createStream.write(node.data)
            else if(node.previous.type=='xml'&&node.previous.direction[0].data==node.data){
                createStream.write(node.data)
            }
            else
                createStream.write(','+node.data)
            for(i=0;i<=node.num_child;i++) {
                if(i>1&i==node.num_child)
                    createStream.write(']}')         //checking for a multiple childs
                if(i==node.num_child&i<=1)
                    createStream.write('}')            //closing tags
                this.writeToJson(node.direction[i]);
                ht+=node.height;
               // console.log("HEIGHT OF NODE=",ht,node.type) 
            }
        }
    }
    heightTree(node){
        var i=0;
        for(i=0;i<=node.num_child;i++) {
            this.heightTree(node.direction[i]);
            ht+=node.height;
        }
        console.log("HEIGHT OF TREE=",ht,node.type)
        
    }
    postorder(node) 
    { 
        if(node != null) 
        { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.data); 
        } 
    } 
    getRootNode() 
    { 
        return this.root; 
    }
    getCurrentNode(){
        return this.current;
    }
}
module.exports=Tree;
var BST = new Tree(); 
var fs= require("fs");
var ht=0;
var createStream=fs.createWriteStream("t_lipsi.json",{flag:'a'});
// Inserting nodes to the Tree 
//   BST.insert(15); 
//   BST.insert(12); 
//  BST.insert(43); 
//  BST.close_tag(23); 
//  BST.insert(67);
//  BST.insert(23); 
//  BST.insert(23); 
//  BST.insert(67); 
//  BST.insert(23); 
// BST.insert(43); 
// BST.insert(23); 
// BST.insert(43);
// BST.insert(67);
// BST.insert(12); 
// BST.insert(43); 
//  var re = BST.getCurrentNode();
//  console.log(re)
//  BST.display_tree(re)