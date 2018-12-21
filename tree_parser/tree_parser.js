var fs= require("fs");
var createStream=fs.createWriteStream("t_lipsi.json",{flag:'a'});
var data,i=0,close_with_open=0,tag=null;
var fetch_style_details=function(tag,id){
    var style_properties='';
    var req_line=tag+'.'+id+'{',flag=0  
    var line=fs.readFileSync("lipsi.css");
    line=(line.toLocaleString()).split(/\n/g)
    for(var c=0;c<line.length;c++){
        lineCSS=line[c]
        if(flag==1&lineCSS!='}'){
            style=lineCSS.split(":")
            style_properties+='"'+style[0].trim()+'":"'+(style[1]=style[1].slice(0,style[1].length-1))+'",'
        }
        else if(lineCSS==req_line){
            flag=1
        } 
        else if(lineCSS=='}'&flag==1){
            flag=0;
            style_properties=style_properties.slice(0,style_properties.length-1)
            return (style_properties)
         }
     }
};
var get_element_properties=function(){
    if(res[i].endsWith('>'))
        res[i]=res[i].slice(1,res[i].length-1)
    else
        res[i]=res[i].slice(1,res[i].length)
    tag=res[i]
    data='"element":{"attribute":{"type":'+'"'+res[i]+'"'
    if(res.length>1){
        for(var j=i+1;j<res.length;j++){
            if(res[j]=='id'|res[j]=='class'){
                if(res[j+2].endsWith('/>')){
                    res[j+2]=res[j+2].slice(1,res[j+2].length-3)
                }
                else if(res[j+2].endsWith(">")){
                    res[j+2]=res[j+2].slice(1,res[j+2].length-2)
                }
                else
                    res[j+2]=res[j+2].slice(1,res[j+2].length-1)
                data+=',"'+res[j]+'":"'+res[j+2]+'","style":{'
                var st=fetch_style_details(tag,res[j+2])
                data+=st+'}';
                i=j+2;
            }
            else if(res[j]=='src'){
                if(res[j+2].endsWith('/>')){
                    res[j+2]=res[j+2].slice(1,res[j+2].length-3)
                    data+=',"'+res[j]+'":"'+res[j+2]+'"'
                    close_with_open=1;
                }
                else if(res[j+2].endsWith(">")){
                    res[j+2]=res[j+2].slice(1,res[j+2].length-2)
                    data+=',"'+res[j]+'":"'+res[j+2]+'"'
                }
            }
        }
        if(tag=="text"){
            var insert_line='"';
            for(r=i+1;r<res.length-1;r++){
                insert_line=insert_line+" "+res[r];
            }
            data+=',"data":'+insert_line+'"'
            i=r-1;
        }
        else
            i=j+2;  //assigning a possition to end of the src,id or class
    }
};
const Tree = require('./tree.js');
var file_data=fs.readFileSync("t_lipsi.html")
let tree = new Tree();
    var file_data=(file_data.toString()).replace(/\n/g,",")
    file_data=(file_data.toString()).replace(/\t/g,"")
    file_data=file_data.split(",")
    var res
    for(var line=0;line<file_data.length;line++){
    res=file_data[line]
    res=res.split(" ")
    for(i=0;i<res.length;i++){
        if(res[i]=='<?xml'){
            data='{'
            tree.insert(data,"xml")
        }
        else if(res[i].startsWith("</")|res[i].endsWith("/>")){    //checking for an end tags
            res[i]=res[i].slice(2,res[i].length-1)  //removing "</ and >" char from tag value
            var current=tree.getCurrentNode();
            root=tree.getRootNode()
            tree.close_tag(current,res[i])
            if(res[i]==root.type){
                tree.writeToJson(root)
            }
        }
        else if(res[i].startsWith('<')){
            get_element_properties()
            tree.insert(data+"}",tag)
            var root = tree.getRootNode();
            if(close_with_open==1){                 //tags which are closing in the same line where they opened
                var current=tree.getCurrentNode();
                root=tree.getRootNode()
                tree.close_tag(current,tag)
                close_with_open=0
            }
        }    
    }   
   //tree.display_tree(root)
}