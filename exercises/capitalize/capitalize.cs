public static UppercaseFirst(string str) {  
   char[] array = str.ToCharArray();
        // Handle the first letter in the string.
        if (array.Length >= 1)
        {
            if (char.IsLower(array[0]))
            {
                array[0] = char.ToUpper(array[0]);
            }
        }
        // Scan through the letters, checking for spaces.
        // ... Uppercase the lowercase letters following spaces.
        for (int i = 1; i < array.Length; i++)
        {
            if (array[i - 1] == ' ')
            {
                if (char.IsLower(array[i]))
                {
                    array[i] = char.ToUpper(array[i]);
                }
            }
        }
        return new string(array);
}  

public static UppercaseFirst2(string str) {  
 return string.Join(" ", str.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(c => c.Substring(0, 1).ToUpper() + c.Substring(1).ToLower()));
}  

public static UppercaseFirst3(string str) {  
Char[] charArray = str.ToCharArray();

foreach(Match m in Regex.Matches(str, @"\b[a-z]"))
{
    charArray[m.Index] = Char.ToUpper(charArray[m.Index]);
}

return new string(charArray)
}  

