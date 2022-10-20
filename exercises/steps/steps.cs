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


public static steps2(int rows) {  
  for (int i = 0; i <= rows; i++)
        {
            for (int j = 0; j <= i; j++)
            {
                Console.Write("*");
            }
            Console.WriteLine("\n");
        }
        Console.ReadKey();
} 