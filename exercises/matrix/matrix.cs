public static void matrix(int n){
int[,] matrix = new int[n, n];
		int row = 0;
		int col = 0;
		string direction = "right";
		int maxRotations = n * n;
		for (int i = 1; i <= maxRotations; i++)
		{
			if ((direction == "right") && (col > n - 1 || matrix[row, col] != 0))
			{
				direction = "down";
				col--;
				row++;
			}
			if ((direction == "down") && (row > n - 1 || matrix[row, col] != 0))
			{
				direction = "left";
				row--;
				col--;
			}
			if ((direction == "left") && (col < 0 || matrix[row, col] != 0))
			{
				direction = "up";
				col++;
				row--;
			}
			if ((direction == "up") && (row < 0 || matrix[row, col] != 0) )
			{
				direction = "right";
				row++;
				col++;
			}
			matrix[row, col] = i;
			if (direction == "right")
			{
				col++;
			}
			if (direction == "down")
			{
				row++;
			}
			if (direction == "left")
			{
				col--;
			}
			if (direction == "up")
			{
				row--;
			}
		}
		for (int r = 0; r < n; r++)
		{
			for (int c = 0; c < n; c++)
			{
				Console.Write("{0, 4}", matrix[r, c]);
			}
			Console.WriteLine();
		}
}

public static void matrix2(int n){
    int positionX = 0;
            int positionY = 0;

            int direction = 0; // The initial direction is "right"
            int stepsCount = n - 1; // stepsCount decrements after 1/2/2/2/2... turns
            int stepPosition = 1; // 1 steps already performed
            int counter = 0; // counter increments after every change in direction

            for (int i = 1; i < n * n + 1; i++)
            {
                matrix[positionY, positionX] = i;

                //moving logic:

                if (stepPosition <= stepsCount)
                {
                    stepPosition++;
                }
                else
                {
                    counter++;
                    stepPosition = 1;

                    if (counter % 2 != 0)
                    {
                        stepsCount = stepsCount - 1;
                        direction = (direction + 1) % 4;
                    }
                    else if (counter % 2 == 0)
                    {
                        direction = (direction + 1) % 4;
                    }

                }
}

public static void matrix3(int n){
 
            int[, ] a = new int[n, n];  
            int printValue = 1;  
            int c1 = 0, c2 = n - 1;  
            while (printValue <= n * n)  
            {  
                //Right Direction Move  
                for (int i = c1; i <= c2; i++)  
                    a[c1, i] = printValue++;  
                //Down Direction Move  
                for (int j = c1 + 1; j <= c2; j++)  
                    a[j, c2] = printValue++;  
                //Left Direction Move  
                for (int i = c2 - 1; i >= c1; i--)  
                    a[c2, i] = printValue++;  
                //Up Direction Move  
                for (int j = c2 - 1; j >= c1 + 1; j--)  
                    a[j, c1] = printValue++;  
                c1++;  
                c2--;  
            }  
            for (int i = 0; i < n; i++)  
            {  
                for (int j = 0; j < n; j++)  
                {  
                    Console.Write(a[i, j] + "\t");  
                }  
                Console.WriteLine();  
            }  
            Console.Read();  
}