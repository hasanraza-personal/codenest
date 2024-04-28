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
    image: null,
  },
  {
    topic: "Function",
    desc: `
    <b>Call By Value</b><br />
    <b>Call By Reference</b><br /><br />
    <b>Call By Value</b><br />
    Argument is passed and value of the actual argument doesn't changes.<br /><br />
    <b>Call By Reference</b><br />
    Address of the argument is passed and value of actual argument do changes.
    `,
    code: `
    #include <iostream>
    using namespace std;

    // Function to swap two integers using call by value
    void swapByValue(int a, int b) {
      int temp = a;
      a = b;
      b = temp;
    }

    // Function to swap two integers using call by reference
    void swapByReference(int &a, int &b) {
      int temp = a;
      a = b;
      b = temp;
    }

    int main() {
      int num1 = 5, num2 = 10;

      cout << "Before Swap: " << endl;
      cout << "num1: " << num1 << endl;
      cout << "num2: " << num2 << endl << endl;

      // Call swapByValue
      swapByValue(num1, num2);
      cout << "After Swap By Value: " << endl;
      cout << "num1: " << num1 << "\\n";
      cout << "num2: " << num2 << "\\n\\n";

      // Reset num1 and num2
      num1 = 5, num2 = 10;

      // Call swapByReference
      swapByReference(num1, num2);
      cout << "After Swap By Reference: " << endl;
      cout << "num1: " << num1 << endl;
      cout << "num2: " << num2;

      return 0;
    }

    `,
    image: null,
  },
  {
    topic: "Object as function argument",
    desc: null,
    code: `
    #include <iostream>
    using namespace std;

    class Employee{
    public:
      int sal;
      int totalSal = 0;

      void enterSalary(){
        cout << "Please enter your salary: ";
        cin >> sal;
      }

      void addSalary(Employee e1, Employee e2){
        totalSal = e1.sal + e2.sal;
      }

      void displaySalary(){
        cout << totalSal;
      }
    };

    int main(){
      Employee o1,o2,o3;
      o1.enterSalary();
      o2.enterSalary();
      o3.addSalary(o1, o2);
      o3.displaySalary();
    }
    `,
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
  },
];

module.exports = advanceC;
