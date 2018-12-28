var Rocker = require('./constants.js');
var r = new Rocker(1024.0, 800.0);
r.about();          //display page layout value

var row_count=r.PADDING;
var padding=r.PADDING;
var page_height=r.PAGE_HEIGHT;
var skill_box_width=r.SKILL_BOX_WIDTH;
var x,y,l_val;

var text="I am a software programmer with years of experience I have insider knowledge of application stack for"// insider knowledge of application stack for retails business With my inserttext";
var letter//,text="Amazon Web Server(AWS)";
var row_sum=0,i=0,j=0,k,temp=0,m=0,r=0,flag=0;
var p=0,t;
var insert_text;
//creating a file to store a output
var fs = require("fs");
var createStream = fs.createWriteStream("Post_script.txt");

//structure definition
/*var Struct = require('struct');

var skill_box = Struct()
	.float(x)
	.float(y);

 alpha = Struct()
	.int(l)
	.char('letter',2);
   
   
alpha.allocate();
var buf = skill_box.buffer();
var buf = People.alpha();*/
function skill_width(){
    setTimeout(
        () => {
    var r = new Rocker(1024.0, 800.0);
    x=((r.PAGE_WIDTH*10)/100);		//value is 102.40
	y=0;
    console.log("x-axis="+x);
    draw_geometry();
    },
    0
    );
}
function draw_geometry(){
    setTimeout(
        () => {
    var writeStream = fs.createWriteStream("Post_script.txt",{flags: 'a'});
    writeStream.write("newpath\n");
	writeStream.write("0 500 moveto\n");
    writeStream.write("0 500 lineto\n");
    writeStream.write("350 842 lineto\n");
    writeStream.write("0 842 lineto\n");
    writeStream.write("0 500 lineto\n");
    writeStream.write("closepath\n");
    writeStream.write("gsave\n");
    writeStream.write("1 0.9 0 setrgbcolor\n");
    writeStream.write("fill\n");
    writeStream.write("grestore\n");
    writeStream.write("0.9 0.9 0 setrgbcolor\n");
    writeStream.write("3 setlinewidth\n");
    writeStream.write("stroke\n");
    writeStream.write("grestore\n\n");

    //shadow line
    writeStream.write("newpath\n");
	writeStream.write("0 0 moveto\n");
	writeStream.write("70 0 lineto\n");
    writeStream.write("70 565 lineto\n");
    writeStream.write("0 495 lineto\n");
    writeStream.write("0 0 lineto\n");
    writeStream.write("closepath\n");
    writeStream.write("gsave\n");
    writeStream.write(".96 0.96 0.96 setrgbcolor\n");
    writeStream.write("fill\n");
    writeStream.write("stroke\n");
    writeStream.write("grestore\n\n");
   

    //straight line
    writeStream.write("newpath\n");
	writeStream.write("400 570 moveto\n");
	writeStream.write("110 0 rlineto\n");
    writeStream.write("0 −80 rlineto\n");
    writeStream.write("closepath\n");
    writeStream.write("1 0.9 0 setrgbcolor\n");
    writeStream.write("stroke\n");
    writeStream.write("grestore\n\n");
    writeStream.end();
    create_skill_table();
},
0
);
   
}
function create_skill_table(){
    setTimeout(
        () => {
    temp=text.length;
    console.log(temp);  
    p=0;
    for(i=0;i<=text.length;i++){
        var fs = require("fs");
        var contents = fs.readFileSync("char_width.json");
        var jsonContent = JSON.parse(contents);

        for(var c=0;c in jsonContent.special_char;c++){             //Till the end of json
            if (text[i]==jsonContent.special_char[c].char){         //Text comparision with a character present in the char_width json file
                if ( text[i-1] == ' '){	//cheking for a white spaces
                    row_sum=row_sum+2;			//adding 2 because of white space
                    wp=i-1;
                    console.log("w="+wp+"i="+i)
                }	
                row_sum=row_sum+parseInt(jsonContent.special_char[c].value, 10);			//adding letter value to the sum of the row
                console.log("length of the row="+row_sum+" "+jsonContent.special_char[c].char);
                break;
            }

        }

        if((row_sum>=60)||((i+1)>text.length)	){
            if((i+1)>text.length)					//if last row
            {				
                insert_text = text.slice(j,(i+1));
                var writeStream = fs.createWriteStream("Post_script.txt",{flags: 'a'}); //writi
                writeStream.write("/Helvetica findfont 12 scalefont setfont "+(x+padding)+" "+(skill_box_width-row_count)+"  moveto ("+ insert_text+") show\n");
                writeStream.end();
                console.log("breaking a line\n\n\n");
                row_sum=0;
                row_count=row_count+20;					//for height of the box	
            }
            else{                                       //row width is 30
                if(text[i+1]!=' '){	
                    m=i-(wp);                    //i-whitespace pointer value
                    i=i-m;	
                }
                else{
                    i++;
                }

                insert_text = text.slice(j,(i+1));//add last character of the text to
                var writeStream = fs.createWriteStream("Post_script.txt",{flags: 'a'});
                    writeStream.write("/Helvetica findfont 12 scalefont setfont "+(x+padding)+" "+(skill_box_width-row_count)+"  moveto ("+ insert_text+") show\n");				
                    row_sum=0;
					row_count=row_count+15;					//for height of the box
					insert_text=" ";		
					j=i+1;
					console.log("breaking a line\n"+insert_text);
				
            }  
        }
        else
			{
                insert_text = text.slice(j,(i));
                console.log('insert text:'+insert_text);
				//j++;
			}
		p++;

    }
    //print("letters %s\tnumber %d\t row length=%d\t row_count=%d \n",text,temp,row_sum,row_count);
    y=skill_box_width-(row_count);
    insert_text = text.slice(0,(i));//add last character of the text to
    var writeStream = fs.createWriteStream("Post_script.txt",{flags: 'a'}); //writi
    writeStream.write("\nnewpath\n");
	writeStream.write(x+" "+y+" moveto\n");
	writeStream.write(skill_box_width+" "+y+" lineto\n");
	writeStream.write(skill_box_width+" "+skill_box_width+" lineto\n");
	writeStream.write(x+" "+skill_box_width+" lineto\n");
    writeStream.write(x+" "+y+" lineto\n");
    writeStream.write("1 1 0 setrgbcolor\n")
    writeStream.write("1 setlinewidth\n")
    writeStream.write("stroke\n")
    writeStream.write("grestore\n")
    writeStream.write("showpage\n\n")
    writeStream.end();
},
0
);

}


skill_width();
