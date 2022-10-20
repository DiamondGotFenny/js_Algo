public static void pyramid(int num)
{
    int count = 1;

        for (int lines = num; lines >= 1; lines--)
        {

            for (int spaces = lines - 1; spaces >= 1; spaces--)
            {
                Console.Write(" ");

            }
            for (int star = 1; star <= count; star++)
            {
                Console.Write("*");
                Console.Write(" ");

            }
            count++;

            Console.WriteLine();
        }
        Console.ReadLine();
}

public static void pyramid2(int num)
{
    int spc,len=1;
    spc=num-1;
    for(int i=1;i<=num;i++){
        for(int r=1;r<=spc;r++){
            Console.Write(" ");
        }
        for(int s=1;s<=len;s++){
            Console.Write("#");
        }
        spc--;
        len=len+2;
        Console.WriteLine();
    }
    Console.ReadLine();
}