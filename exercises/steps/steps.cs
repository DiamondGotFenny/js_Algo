public static steps(int n) {  
   for(int row=1;row<=n;row++){
    string str="";
    for(int column=1;column<=n;column++){
        if(column<=row){
            str+="#"
        }else{
           str+=" "
        }
    }
    Console.WriteLine(str);
   } 
} 
