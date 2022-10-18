//do not use this in interview
public static string Reverse( string s )
{
    char[] charArray = s.ToCharArray();
    Array.Reverse(charArray);
    return new string(charArray);
}

///Need one extra array for result, need to traverse full array.  
public static stringReverseString1(string str) {  
    char[] chars = str.ToCharArray();  
    char[] result = newchar[chars.Length];  
    for (int i = 0, j = str.Length - 1; i < str.Length; i++, j--) {  
        result[i] = chars[j];  
    }  
    return new string(result);  
}  

///Uses swap method to reverse; need to traverse only half of the array.  
public static stringReverseString2(string str) {  
    char[] chars = str.ToCharArray();  
    for (int i = 0, j = str.Length - 1; i < j; i++, j--) {  
        char c = chars[i];  
        chars[i] = chars[j];  
        chars[j] = c;  
    }  
    return new string(chars);  
}  

///Here is the use of in-place swap without any temp variable  
public static stringReverseString3(string str) {  
    char[] chars = str.ToCharArray();  
    for (int i = 0, j = str.Length - 1; i < j; i++, j--) {  
        chars[i] = str[j];  
        chars[j] = str[i];  
    }  
    return new string(chars);  
} 

///Recursion method; simple and regular performance for small strings  
public static stringReverseString_Rec(string str) {  
    if (str.Length <= 1) return str;  
    else return ReverseString_Rec(str.Substring(1)) + str[0];  
}

public static string Reverse(this string str) { 
    string reversedWord = ""; 
    for (int wordNumber = str.Length; wordNumber > 0; wordNumber--) { 
        reversedWord += str[wordNumber - 1]; 
    } 
    return reversedWord; 
}

//use string.Create that provided since .net core 2.1, has better performance
 public static string ReverseWithStringCreate(string input)
    {
        return string.Create(input.Length, input, (chars, state) =>
        {
            state.AsSpan().CopyTo(chars);
            chars.Reverse();
        });
    }