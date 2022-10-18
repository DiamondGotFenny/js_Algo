public void RunFizzBuzz(int until)
        {
            for (int i = 1; i <= until; i++)
            {
                if (i % 3 == 0 && i % 5 == 0)
                {
                    Console.WriteLine("fizzbuzz");
                } 
                else if (i % 3 == 0)
                {
                    Console.WriteLine("fizz");
                } 
                else if (i % 5 == 0)
                {
                    Console.WriteLine("buzz");
                } 
                else
                {
                    Console.WriteLine(i);
                }
            }
        }

        public void RunFizzBuzz2(int until)
        {
            for (int i = 1; i <= until; i++)
            {
               string str = "";  
                if (i % 3 == 0)  
                {  
                    str += "Fizz";  
                }  
                if (i % 5 == 0)  
                {  
                    str += "Buzz";  
                }  
                if (str.Length == 0)  
                {  
                    str = i.ToString();  
                }  
                Console.WriteLine(str);  
            }
        }

public void RunFizzBuzz2(int until)
        {
          var dic = new Dictionary<int, string> { { 3, "Fizz" }, { 5, "Buzz" } };

var t = 
        from number in Enumerable.Range(1, until)
        let names = dic.Where(kv => number % kv.Key == 0).Select(kv => kv.Value)
        select names.Any() ? string.Join("", names) : number.ToString();

t.ToList().ForEach(Console.WriteLine);
        }