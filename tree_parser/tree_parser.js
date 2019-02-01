var fs= require("fs");
var createStream=fs.createWriteStream("t_lipsi.json",{flag:'a'});
var data,i=0,close_with_open=0,tag=null,height=0;
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
get_row_data=function(text){
    console.log(text)
    var fs = require("fs");
    var contents = fs.readFileSync("char_width.json");
    var jsonContent = JSON.parse(contents);
    var row_sum=0,starting_point=0,line_height=40;
    var insert_text=[],line="";
    for(var i=0;i<text.length;i++){
        for(var c=0;c in jsonContent.special_char;c++){             //Till the end of json
            if (text[i]==jsonContent.special_char[c].char){         //Text comparision with a character present in the char_width json file
                if (( text[i-1] == ' ')){	//cheking for a white spaces
                    row_sum=row_sum+2;			//adding 2 because of white space
                    wp=i-1;
                    line+=text.slice(starting_point,i)
                    starting_point=i;
                }	
                row_sum=row_sum+parseInt(jsonContent.special_char[c].value, 10);			//adding letter value to the sum of the row
                break;
            }
        }
        if(row_sum>30||i+1>=text.length){
            if(i+1>=text.length){	
                //if last row
                line+=text.slice(starting_point,i+1)
                insert_text.push(line)
            }
            else{
                if(text[i+1]!=' '){	
                    m=i-(wp);                    //i-whitespace pointer value
                    i=i-m;	
                }
                else{
                    i++;
                }
                row_sum=0;
                insert_text.push(line)
                line="";
                starting_point=i;
            }
        }
    }
    data+=',"data":{';
    insert_text[0]=insert_text[0].slice(1,insert_text[0].length)
    for(var d=0;d<insert_text.length;d++){
        data+='"'+d+'":"'+insert_text[d]+'",';
    }
    console.log("INSERT TEXTTTT",insert_text)
    data=data.slice(0,data.length-1)
    data+='}'
    height=insert_text.length*line_height;
}
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
                    close_with_open=1;
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
                height=34;
            }
        }
        if(tag=="text"){
            var insert_line='"';
            for(r=i+1;r<res.length-1;r++){
                insert_line=insert_line+" "+res[r];
            }
            get_row_data(insert_line)
            i=r-1;
        }
        else
            i=j+2;  //assigning a possition to end of the src,id or class
    }
};
const Tree = require('./tree.js');
var file_data=fs.readFileSync("t_lipsi.html")
let tree = new Tree();
var root;
    var file_data=(file_data.toString()).replace(/\n/g,",")
    file_data=(file_data.toString()).replace(/\t/g,"")
    file_data=file_data.split(",")
    var res
    for(var line=0;line<file_data.length;line++){
    res=file_data[line]
    height=0;
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
            data+=',"node_height":"'+height+'"';
            tree.insert(data+"}",tag,height)
            if(close_with_open==1){                 //tags which are closing in the same line where they opened
                var current=tree.getCurrentNode();
                tree.close_tag(current,tag)
                close_with_open=0
            }
        }    
    }   
   //tree.display_tree(root)
}
tree.calculate_heightTree(root)
height_of_tree=tree.get_height();
console.log("height of the treee is",height_of_tree)