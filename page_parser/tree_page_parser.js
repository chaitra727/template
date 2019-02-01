var fs=require('fs')
const Tree = require('./tree.js');
let tree=new Tree();
var root=tree.getRootNode();
var data=fs.readFileSync("tree_lipsi.json").toString();
data=data.split('\n')
tree.insert('{',"xml","0","0")
var tag="",sum=0,page=1,page_height=300,type,opened_container_data="";
function close_tag(){
    console.log(i+1,data.length)
    if(i+1<data.length)
        data[i+1]=data[i+1].trim()
    //tag+=data[i]
    for(var c=i+1;data[c]!='{';c++){
        if(c==data.length)
            break;
        if(c+1<data.length)
            data[c+1]=data[c+1].trim();
        tag+=data[c];
    }
    tree.insert(tag,type,"0","0")
    for(var c=i+1;data[c]!='{';c++){
        if(c==data.length+1)
            break;
        var current=tree.getCurrentNode()        
        if(data[c-1].startsWith('}')|data[c-1].startsWith(']')){
            var current=tree.getCurrentNode()
            if(current.previous!=null)
                var previous=tree.get_previous_node(current);
            else
                break;
            if(previous.type=="table"&&previous.opened_container>0){
                if(current.previous.direction[current.previous.num_child-2].opened_container==1){
                    current.previous.direction[current.previous.num_child-2].data=current.previous.direction[current.previous.num_child-2].data.replace('"bottom":"true"', '"bottom":"false"');
                }
                current.data='{"visibility":{"top":"false","bottom":"true","left":"true","right":"true"},'+current.data.slice(1,current.data.length)
                current.opened_container=1;
            }
            else if(current.previous.type=="table"&&previous.opened_container==0){
                current.previous.data=current.previous.data.slice(0,current.previous.data.length-2)
                current.previous.data+=',"visibility":{"top":"true","bottom":"false","left":"true","right":"true"}},'
                current.previous.opened_container=1;
            }
            tree.close_json_file_tag(current)
        }
    }
    tag="";type=""
    i=c-1;
}
function break_page(){
    page++;
    close_tag();
    current=tree.getCurrentNode();
    root=tree.getRootNode();
    if(current.type=="table"&current.opened_container==0){
            current.data=current.data.slice(0,current.data.length-2)
            opened_container_data=current.data;
            current.data+=',"visibility":{"top":"true","bottom":"false","left":"true","right":"true"}},' 
            current.opened_container=1;    
            //tree.update_node(current,current.data,1)
    }
    // else if(current.type=="table"&current.opened_container>0&data[i+1].trim()=='}'){
    //     console.log("HIIIIIIIII")
    // }   
}
for(i=1;i<data.length;i++){11
    data[i]=data[i].trim()
    if((data[i].startsWith('"element":')|(data[i].startsWith('{')&i!=0))&tag!=""){
        if(!data[i-1].startsWith('"element":')){
            tree.insert(tag,type,"0","0")
            tag=data[i]
            type=""
        }         
    }
    else
        tag+=data[i]
    if(data[i].startsWith('"node_height":')){
        var node_height=data[i].split(":")
        var height=node_height[1].slice(2,node_height[1].length-1)
        sum+=parseInt(height,10)
    }
    else if(data[i].startsWith('"type":')){
        type=data[i].split(":")
        type=type[1].slice(2,type[1].length-2)
    }
    else if(data[i].startsWith("}")){
        if(data[i-1].startsWith('}')|data[i-1].startsWith(']')){
            if(tag.startsWith('"element":')){
                close_tag();
                current=tree.getCurrentNode();
                root=tree.getRootNode()
            }
        }
    }
    if(sum>=page_height){
        break_page();
        sum=0
    }
}
if(tag!="")
    tree.insert(tag,type,"0","0");
//break_page();
tag=""
root=tree.getRootNode()
tree.display_tree(root);