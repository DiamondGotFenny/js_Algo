public string IsPalindrome(string Word)
{
    int i = 0, j = Word.Length - 1;
    for (; i < Word.Length - 1 && j >= 0 && Word[i] == Word[j]; i++, j--) ;
    return j == 0 ? "Palindrome" : "Not Palindrome";
}

 public static bool IsPalindrome(string value)
    {
        int min = 0;
        int max = value.Length - 1;
        while (true)
        {
            if (min > max)
            {
                return true;
            }
            char a = value[min];
            char b = value[max];
            if (char.ToLower(a) != char.ToLower(b))
            {
                return false;
            }
            min++;
            max--;
        }
    }

//the empty space and Punctuation will be ignored
    public static bool IsPalindrome2(string value)
    {
        int min = 0;
        int max = value.Length - 1;
        while (true)
        {
            if (min > max)
            {
                return true;
            }
            char a = value[min];
            char b = value[max];
            
            // Scan forward for a while invalid.
            while (!char.IsLetterOrDigit(a))
            {
                min++;
                if (min > max)
                {
                    return true;
                }
                a = value[min];
            }
            
            // Scan backward for b while invalid.
            while (!char.IsLetterOrDigit(b))
            {
                max--;
                if (min > max)
                {
                    return true;
                }
                b = value[max];
            }
            
            if (char.ToLower(a) != char.ToLower(b))
            {
                return false;
            }
            min++;
            max--;
        }