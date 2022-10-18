static char[] GetMostFrequentChar(string str)
{
    Dictionary<char, int> result = str.GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());
    return result.Where(x => x.Value == result.Values.Max()).Select(x => x.Key).ToArray();
}



public static char GetMostFrequentChar3(string str)
{
    int maxCount = -1;
    char character = ' ';
    for (int i = 0; i < str.length; i++) {
        if (maxCount < charCount[str[i]]) {
        maxCount = charCount[str[i]];
        character = str[i];
        }
    }
    return character
}

public static char[] GetMostFrequentChar4(string str)
{
    Dictionary<char, int> chars = new Dictionary<char, int>();

    foreach (char c in str)
    {
        if (chars.ContainsKey(c)) chars[c]++;
        else chars.Add(c, 1);
    }

    int max = chars.Values.Max();
    return chars.Where(b => b.Value == max).Select(b => b.Key).ToArray();
}

public static char[] GetMostFrequentChar2(string str)
{
    int[] ch_fre = new int[255];
    int i = 0, max,l;
    int ascii;
	
      l=str.Length;

    for(i=0; i<255; i++)  //Set frequency of all characters to 0
    {
        ch_fre[i] = 0;
    }
    /* Read for frequency of each characters */
    i=0;
    while(i<l)
    {
        ascii = (int)str[i];
        ch_fre[ascii] += 1;

        i++;
    }
    max = 0;
    for(i=0; i<255; i++)
    {
      if(i!=32)
        {
        if(ch_fre[i] > ch_fre[max])
            max = i;
        }
    }
    return (char)max
  
	}


public char GetMostFrequentChar3(string input)
{
    var charMap = input.Distinct().ToDictionary(c => c, c => input.Count(s => s == c));
     return charMap.OrderByDescending(kvp => kvp.Value).First().Key;
}

// finds the second most frequently
    // occurring char
    static char getSecondMostFreq(string str)
    {
           int NO_OF_CHARS = 256;
        // count number of occurrences of every
        // character.
        int []count = new int[NO_OF_CHARS];
 
        for (int i = 0; i < str.Length; i++)
            (count[str[i]])++;
     
        // Traverse through the count[] and find
        // second highest element.
        int first = 0, second = 0;
         
        for (int i = 0; i < NO_OF_CHARS; i++)
        {
             
            /* If current element is smaller
            than first then update both first
            and second */
            if (count[i] > count[first])
            {
                second = first;
                first = i;
            }
     
            /* If count[i] is in between first
            and second then update second */
            else if (count[i] > count[second] &&
                       count[i] != count[first])
                second = i;
        }
     
        return (char)second;
    }