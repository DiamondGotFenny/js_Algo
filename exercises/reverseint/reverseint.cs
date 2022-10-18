public static int reverse(int number, int result = 0)
{
    if (number == 0)
    {
        return result;
    }
    return reverse(number / 10, result * 10 + number % 10);
}
public static int reverseShort(int number, int result = 0)
{
    return number == 0 ? result : reverseShort(number / 10, result * 10 + number % 10);
}
public static int reverseInt(int number){
    int reminder, reverse = 0;
            while (number != 0)
            {
                //Get the remainder by dividing the number with 10  
                reminder = number % 10;
                //multiply the sum with 10 and then add the reminder
                reverse = (reverse * 10) + reminder;
                //Get the quotient by dividing the number with 10 
                number = number / 10;
            }
            return reverse
}

public static int reverseInt2(int number)
{
  return Convert.ToInt32(new string(number.ToString().Reverse().ToArray()));
}
