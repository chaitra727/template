module.exports=function(){
this.get_row_data=function(){
    var fs = require("fs");
    var contents = fs.readFileSync("char_width.json");
    var jsonContent = JSON.parse(contents);
    var text="amazon web service, nodejs, android";
    var row_sum=0,starting_point=0;
    var insert_text=[],line="";
    for(var i=0;i<text.length;i++){
        for(var c=0;c in jsonContent.special_char;c++){             //Till the end of json
            if (text[i]==jsonContent.special_char[c].char){         //Text comparision with a character present in the char_width json file
                if ( text[i-1] == ' '){	//cheking for a white spaces
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
        console.log(insert_text)
    }
}
this.get_row_data;