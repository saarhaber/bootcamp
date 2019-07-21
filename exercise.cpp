void encodingArray(vector<int> &arr)
{
	for (int i = arr.size()-1; i >= 0; --i)
	{
		if (arr[i] == 9) {
            arr[i] = 0;
            }
		else {
            arr[i]++;
		    return;
		    }
	}
		arr[0] = 1;
		arr.push_back(0);
}

/*
Increment An Arbitrary-Precision Integer:
Write a program which takes as input an array of digits encoding a
decimal number D and updates the array to represent D + 1.
For example, if the input is [1, 2, 9], then you should update the array to [1, 3, 0].
Do not rely on arbitrary-precision arithmetic tools from the
language you program in (such as Python's Decimal class).

Example 1:
D: [1, 2, 9]
output: [1, 3, 0]

Example 2:
D: [0]
output: [1]

Example 3:
D: [9]
output: [1, 0]
 */