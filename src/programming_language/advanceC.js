const advanceC = [
  {
    topic: "Class and Object",
    desc: `
    <b>Class</b>: It is a entire set of data and code of an object. The objects are variables of type class.<br />
    <b>Object</b>: Basic runtime entity in OOP(Object Oriented Programming). It contains data and code to manipulate the data.
    `,
    code: `#include <iostream>
    using namespace std;
    
    class MyClass {
    public:
      int x, y, z;
      string str;
    
      void add() {
        z = x + y;
        cout << "Addition of X and Y is: " << x << endl;
      }
    
      void sub() {
        z = x - y;
        cout << "Subtraction of X and Y is: ";
        cout << z;
      }
    };
    
    int main() {
      MyClass obj;
      obj.add();
      obj.sub();
    
      obj.str = "This is a example of Object and Class";
      cout << "\n" << obj.str;
    }`,
  },
  {
    topic: "Constructor and Destructor",
    desc: `
    <b>Constructor</b><br />
    Special menber function to initialize class object.<br />
    Name is same as of class name.<br />
    No return type.<br />
    Invoked when object is created.<br /><br />

    Types of Constructor:<br />
    <b>Default Constructor</b><br />
    <b>Parameterized Constructor</b><br />
    <b>Copy Constructor</b><br /><br />

    <b>Default Constructor</b><br />
    It is a constructor with no arguments.<br /><br />

    <b>Parameterized Constructor</b><br />
    It is a constructor that takes some arguments.<br /><br />

    <b>Copy Constructor</b><br />
    It is a constructor that takes it's own class as a argument.<br /><br /><br />

    <b>Destructor</b><br />
    Special member function which is called automatically when object is destroyed.<br />
    Same name as class name with symbol<b>~</b>.<br />
    No arguments.<br />
    Can't be overloaded.<br />
    Delete the memory space of objecttemplate<br />
    No return type<br />
    `,
    code: `
    // Default Constructor
    #include <iostream>
    using namespace std;

    class Student {
      int roll_no;
      float marks;
    
    public:
      Student() {
        roll_no = 0;
        marks = 0.00;
        cout << "Roll no is " << roll_no << endl;
        cout << "Marks is " << marks << endl;
      }
    };

    int main() { 
      Student s; 
    } 


    // Parameterized Constructor
    #include <iostream>
    using namespace std;

    class Student {
      int roll_no;
      float marks;

    public:
      Student(int i, float j) {
        roll_no = i;
        marks = j;
        cout << "Roll no is " << roll_no << endl;
        cout << "Marks is " << marks << endl;
      }
    };

    int main() { 
      Student s(2, 50.0); 
    }


    // Copy Constructor
    #include <iostream>
    using namespace std;

    class Student {
      int roll_no;
    
    public:
      Student(int i) {
        roll_no = i;
        cout << "Roll no is " << roll_no << endl;
      }
    
      Student(Student &s) {
        roll_no = s.roll_no;
        cout << "Roll no is " << roll_no << endl;
      }
    };
    
    int main() {
      Student s1(2);
      Student s2(s1);
    } 

    // Destructor
    #include <iostream>
    using namespace std;

    class Student {
    public:
      Student() { 
        cout << "This is constructor"; 
      }

      void someFunction() { 
        cout << "Hello world"; 
      }

      ~Student() { 
        cout << "This is destructor"; 
      }
    };

    int main() {
      Student s;
      s.someFunction();
    }
    `,
  },
  {
    topic: "Friend Function",
    desc: `
    Scope is not inside the class in which it has been declared.<br />
    Not called using object of class.<br />
    Can access data members using object of class.<br />
    Usually has object as argument.<br />
    Can access private and protected class data.<br />
    `,
    code: `
    #include <iostream>
    using namespace std;

    class Distance{
      private:
        int i;

      public:
        Distance(){
          i = 0;
        }

        friend int addTwo(Distance);
    };

    int addTwo(Distance d){
      d.i = d.i + 2;
      return d.i;
    }

    int main(){
      Distance dis;

      cout << addTwo(dis);
    }
    `,
  },
  {
    topic: "Friend Class",
    desc: `
    A class can also be made a friend on another class.<br />
    When a class in made friend class all the member function of that class becomes
    friend function.
    `,
    code: `
    #include <iostream>
    using namespace std;

    class Box {
    private:
      int length;
      int width;
      int height;

    public:
      Box(int l, int w, int h) {
        length = l;
        width = w;
        height = h;
      }

      friend class Printer;
    };

    class Printer {
    public:
      void printBoxDetails(Box &box) {
        cout << "Length is " << box.length << endl;
        cout << "Width is " << box.width << endl;
        cout << "Height is " << box.height << endl;
      }
    };

    int main() {
      Box myBox(10, 5, 7);

      Printer myPrinter;
      myPrinter.printBoxDetails(myBox);

      return 0;
    }
    `,
  },
  {
    topic: "Static Data Members",
    desc: `
    Static member variable means only one copy of that variable will exist and all
    the objects will share that variable.<br /> 
    It is also called as class variable. <br />
    Initialized to zero before first object is created. <br />
    `,
    code: `
    #include <iostream>
    using namespace std;

    class Student {
    public:
      int count = 0;
      static int count;

      Student() { 
        count = count + 1; 
      }

      static void display() { 
        cout << count; 
      }
    };

    int Student::count = 0;

    int main() {
      Student s1, s2;

      Student::display();
    }
    `,
  },
  {
    topic: "Sort a set of strings in ascending alphabetical order",
    desc: "",
    code: `
    #include <algorithm>
    #include <iostream>
    using namespace std;
    
    int main() {
      // Define an array of strings
      string strings[] = {"banana", "apple", "orange", "grape"};
      // Calculate the size of the array
      int size = sizeof(strings) / sizeof(strings[0]);
    
      // Sort the array in ascending order
      sort(strings, strings + size);
    
      // Print the sorted array
      for (int i = 0; i < size; ++i) {
        std::cout << strings[i] << std::endl;
      }
    
      return 0;
    }`,
  },
  {
    topic: "Program to sort array in ascending order in c++ ",
    desc: "",
    code: `
    #include <algorithm>
    #include <iostream>
    
    using namespace std;
    
    int main() {
      // Define an array of integers
      int arr[] = {5, 2, 7, 1, 8};
      int size = sizeof(arr) / sizeof(arr[0]); // Calculate the size of the array
    
      // Sort the array in ascending order
      sort(arr, arr + size);
    
      // Print the sorted array
      cout << "Sorted array in ascending order:" << endl;
      for (int i = 0; i < size; ++i) {
        cout << arr[i] << " ";
      }
      cout << endl;
    
      return 0;
    }`,
  },
  {
    topic: "Find largest element of given array in c++",
    desc: "",
    code: `
    #include <iostream>
    using namespace std;
    
    int main() {
      // Define an array of integers
      int arr[] = {5, 2, 7, 1, 8};
      // Calculate the size of the array
      int size = sizeof(arr) / sizeof(arr[0]);
    
      // Initialize the maximum element to the first element of the array
      int maxElement = arr[0];
    
      // Iterate through the array starting from the second element
      for (int i = 1; i < size; ++i) {
        // If the current element is greater than the maximum element, update the maximum element
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    
      // Print the largest element
      cout << "Largest element in the array: " << maxElement << std::endl;
    
      return 0;
    }
    `,
  },
  {
    topic: "C++ program to count vowels and consonants in a String",
    desc: "",
    code: `
    #include <iostream>
    using namespace std;
    
    int main() {
      string str;
      cout << "Enter a string: ";
      getline(cin, str);
    
      int vowels = 0, consonants = 0;
    
      for (int i = 0; i < str.length(); ++i) {
        char c = tolower(str[i]);
        if (c >= 'a' && c <= 'z') {
          if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            vowels++;
          } else {
            consonants++;
          }
        }
      }
    
      cout << "Number of vowels: " << vowels << endl;
      cout << "Number of consonants: " << consonants << endl;
    
      return 0;
    }
    `,
  },
  {
    topic: "C++ Program to Convert Decimal to Binary, Octal, Hexadecimal",
    desc: "",
    code: `
    #include <iostream>
    #include <string>
    using namespace std;
    
    // Function to convert decimal to binary
    string decimalToBinary(int decimalNumber) {
      if (decimalNumber == 0) {
        return "0";
      }
    
      string binary = ""; // Start with an empty string
    
      while (decimalNumber > 0) {
        int digit = decimalNumber % 2; // Get the last digit (0 or 1)
        binary = to_string(digit) +
                 binary; // Add the digit to the beginning of the binary string
        decimalNumber =
            decimalNumber / 2; // Remove the last digit from the decimal number
      }
    
      return binary; // Return the binary representation
    }
    
    // Function to convert decimal to octal
    string decimalToOctal(int decimalNumber) {
      if (decimalNumber == 0) {
        return "0";
      }
    
      string octal = ""; // Start with an empty string
    
      while (decimalNumber > 0) {
        int digit = decimalNumber % 8; // Get the last digit (0 to 7)
        octal = to_string(digit) +
                octal; // Add the digit to the beginning of the octal string
        decimalNumber =
            decimalNumber / 8; // Remove the last digit from the decimal number
      }
    
      return octal; // Return the octal representation
    }
    
    // Function to convert decimal to hexadecimal
    string decimalToHexadecimal(int decimalNumber) {
      if (decimalNumber == 0) {
        return "0";
      }
    
      string hexadecimal = ""; // Start with an empty string
    
      while (decimalNumber > 0) {
        int remainder = decimalNumber % 16; // Get the last digit (0 to 15)
        char digit;
        if (remainder < 10) {
          digit = '0' + remainder; // Convert to ASCII character (0 to 9)
        } else {
          digit = 'A' + remainder - 10; // Convert to ASCII character (A to F)
        }
        hexadecimal =
            digit +
            hexadecimal; // Add the digit to the beginning of the hexadecimal string
        decimalNumber =
            decimalNumber / 16; // Remove the last digit from the decimal number
      }
    
      return hexadecimal; // Return the hexadecimal representation
    }
    
    int main() {
      int decimalNumber;
    
      // Input decimal number
      cout << "Enter a number: ";
      cin >> decimalNumber;
    
      // Convert decimal to binary
      cout << "Binary: " << decimalToBinary(decimalNumber) << endl;
    
      // Convert decimal to octal
      cout << "Octal: " << decimalToOctal(decimalNumber) << endl;
    
      // Convert decimal to hexadecimal
      cout << "Hexadecimal: " << decimalToHexadecimal(decimalNumber) << endl;
    
      return 0;
    }`,
  },
  {
    topic: "C++ Program to Convert Binary, Octal, Hexadecimal to Decimal",
    desc: "",
    code: `
    #include <iostream>
    #include <string>
    using namespace std;
    
    // Function to convert binary to decimal
    int binaryToDecimal(string binaryNumber) {
      int decimalNumber = 0;
      int power = 1;
    
      // Iterate over each digit of the binary number from right to left
      for (int i = binaryNumber.length() - 1; i >= 0; --i) {
        // Convert character '0' or '1' to integer 0 or 1
        int digit = binaryNumber[i] - '0';
        // Update the decimal number by adding the value of the current digit
        decimalNumber = decimalNumber + (digit * power);
        // Increase the power of 2 for the next digit
        power = power * 2;
      }
    
      return decimalNumber;
    }
    
    // Function to convert octal to decimal
    int octalToDecimal(string octalNumber) {
      int decimalNumber = 0;
      int power = 1;
    
      // Iterate over each digit of the octal number from right to left
      for (int i = octalNumber.length() - 1; i >= 0; --i) {
        // Convert character '0' to integer 0
        int digit = octalNumber[i] - '0';
        // Update the decimal number by adding the value of the current digit
        decimalNumber = decimalNumber + (digit * power);
        // Increase the power of 8 for the next digit
        power = power * 8;
      }
    
      return decimalNumber;
    }
    
    // Function to convert hexadecimal to decimal
    int hexadecimalToDecimal(string hexadecimalNumber) {
      int decimalNumber = 0;
      int power = 1;
    
      // Iterate over each digit of the hexadecimal number from right to left
      for (int i = hexadecimalNumber.length() - 1; i >= 0; --i) {
        // Convert character '0' to integer 0, '1' to integer 1, ..., '9' to integer
        // 9 Convert character 'A' to integer 10, 'B' to integer 11, ..., 'F' to
        // integer 15
        int digit;
        if (hexadecimalNumber[i] >= '0' && hexadecimalNumber[i] <= '9') {
          digit = hexadecimalNumber[i] - '0';
        } else {
          digit = hexadecimalNumber[i] - 'A' + 10;
        }
        // Update the decimal number by adding the value of the current digit
        decimalNumber = decimalNumber + (digit * power);
        // Increase the power of 16 for the next digit
        power *= 16;
      }
    
      return decimalNumber;
    }
    
    int main() {
      string number;
      char type;
    
      // Input the type of number and the number itself
      cout << "Enter the type of number (B for binary, O for octal, H for "
              "hexadecimal): ";
      cin >> type;
      cout << "Enter the number: ";
      cin >> number;
    
      // Convert the number to decimal based on the type
      cout << "Binary to Decimal is " << binaryToDecimal(number);
      cout << "Binary to Octal is " << octalToDecimal(number);
      cout << "Binary to Hexadecimal is " << hexadecimalToDecimal(number);
    
      return 0;
    }
    `,
  },
];

module.exports = advanceC;
