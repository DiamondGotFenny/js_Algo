public static int vowels(String myStr){
    int i, len, vowel_count, cons_count;
      vowel_count = 0;
      cons_count = 0;
      // find length
      length = myStr.Length;
      for(i=0; i<length; i++) {
         if(myStr[i] =='a' || myStr[i]=='e' || myStr[i]=='i' || myStr[i]=='o' || myStr[i]=='u' || myStr[i]=='A' || myStr[i]=='E' || myStr[i]=='I' || myStr[i]=='O' || myStr[i]=='U') {
            vowel_count++;
         } else {
            cons_count++;
         }
      }
}

public int FindVowelsWithHelpArray(String inputString)
    {
            int vowelCounter = 0;
 
            if (inputString != null)
            {
                var vowels = new List<char>() { 'a', 'e', 'i', 'o', 'u' };
                foreach (char c in inputString.ToLower())
                {
                    if (vowels.Contains(c))
                    {
                        vowelCounter++;
                    }
                }
            }            
 
            return vowelCounter;
    }

public int FindVowelsWithRegex(String inputString)
    {
            if (inputString == null) return 0;
            return Regex.Matches(inputString, "[aeiou]", RegexOptions.IgnoreCase).Count;
    }

    public int FindVowelsWithLinq(String inputString)
        {
            if (inputString == null) return 0;
            var vowels = new List<char>() { 'a', 'e', 'i', 'o', 'u' };
            return inputString.ToLower().Count(c => vowels.Contains(c));
        }        