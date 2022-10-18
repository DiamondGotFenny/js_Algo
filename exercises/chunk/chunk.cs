public static List<int[]> SplitArrey(int[] arrInput, int nColumn) {

       int[] source = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int i = 0;
        int chunkSize = 3;
        int[][] result = source.GroupBy(s => i++ / chunkSize).Select(g => g.ToArray()).ToArray();

        return result
    }
 
     public static IEnumerable<IEnumerable<T>> Split<T>(this T[] arr, int size)
    {
        for (var i = 0; i < arr.Length / size + 1; i++) {
            yield return arr.Skip(i * size).Take(size);
        }
    }

     public static IEnumerable<IEnumerable<T>> Split2<T>(this T[] arr, int size)
    {
        return arr.Select((s, i) => arr.Skip(i * size).Take(size)).Where(a => a.Any());
    }

  