const fs =require('fs');

const path =require('path');

const dirPath=path.join(__dirname,'files');

for(i=0;i<5;i++)
{
    fs.writeFileSync(dirPath+"/hello"+i+".txt","This is inside text of simple all five file"); 
    // Here created all five file path 
}
// just run the command in termainal : (node .\forfile.js) then auto create the file (file name)

//    ***   For read the file use this elements
// fs.readdir(dirPath,(err,files)=>{   // readdir :- it means read directories
//    FileSystem.forEach((item)=>{
  //      console.log("file name is ", item)
  //  })
//  })