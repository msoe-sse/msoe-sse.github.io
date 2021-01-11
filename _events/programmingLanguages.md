---
layout: page
title: Programming Languages
permalink: /events/programminglanguages
published: true
---

The page contains information about all of the programming languages that apart of the programming language tournament being done by SSE this quarter.

# Ada

Ada is statically typed, high-level object-oriented programming language that is mainly used in mission-critical software such as microkernels and real-time systems. It's still widely used in industries such as the Avionics industry.

```Ada
with Ada.Text_IO; use Ada.Text_IO;
procedure Hello is
begin
   Put_Line ("Hello World. Welcome to GNAT");
end;
```

# AWK

AWK is a pattern-matching programming language used to develop short programs to complete complex text processing tasks. AWKis typically used as a data extraction and reporting tool.

Learn more at: [https://www.gnu.org/software/gawk/manual/gawk.html](https://www.gnu.org/software/gawk/manual/gawk.html)

Example Code: 

```AWK
$ awk 'NR==3, NR==6 {print NR,$0}' employee.txt
Output:
3 varun manager sales 50000
4 amit manager account 47000
5 tarun peon sales 15000
6 deepak clerk sales 23000
```

# Bash

Bash is a Unix shell and command language. Today, Bash is the default user shell on most Linus installations and allows users to interact with the system through the command line.

Learn more at: [https://opensource.com/article/19/10/programming-bash-syntax-tools](https://opensource.com/article/19/10/programming-bash-syntax-tools)

Example Code:

```Bash
$ if VAR=99; then echo 'Assignment done!'; fi
Assignment done!
$ echo $VAR
99
$
```

# Brainfuck
Brainfuck is a language for programming language for programmers looking for a challenge or amusement. It was first released September of 1993. As an esoteric programming language consisting of only eight commands, Brainfuck is meant for its commands to be broken into microscopic steps. Brainfuck is Turing complete.

Example Code from [here](https://andrew.hedges.name/experiments/brainf_cker/#):

```Brainfuck
++++++++++
[
>+++++++
>++++++++++
>+++
>+
<<<<-
]
>++.
>+.
+++++++.
.
+++.
>++.
<<+++++++++++++++.
>.
+++.
------.
--------.
>+.
>.
```

# C
C is a general-purpose procedural programming language used to develop software such as operating systems, databases, compilers, and more. C is used widely for developing system applications, such as those that form a major part of Windows, UNIX, and Linux operating systems.

Learn more at: [https://www.programiz.com/c-programming](https://www.programiz.com/c-programming)

Example Code:

```C
int number1, number2, sum;
printf("Enter two integers: ");
scanf("%d %d", &number1, &number2);
// calculating sum
sum = number1 + number2; 
printf("%d + %d = %d", number1, number2, sum);
```

# C#

C# is a general-purpose object-orientated programming language. C# is widely-used for creating games using the Unity game engine, web application development, and windows applications.

Learn more at: [https://docs.microsoft.com/en-us/dotnet/csharp/](https://docs.microsoft.com/en-us/dotnet/csharp/)

Example Code:

```C#
int a = 18;
int b = 6;
int c = a + b;
Console.WriteLine(c);
```

# C++

C++ is a general-purpose programming language created as an extension of the C programming language, and supports different ways of programming like procedural, object-oriented, functional, and so on. C++ has a wide array of applications, such as game development, database software, operating systems, web browsers, and more.

Learn more at: [https://www.cplusplus.com/](https://www.cplusplus.com/)

Example Code:

```C++
int firstNumber, secondNumber, sumOfTwoNumbers;
cout << "Enter two integers: ";
cin >> firstNumber >> secondNumber;
// sum of two numbers in stored in variable sumOfTwoNumbers
sumOfTwoNumbers = firstNumber + secondNumber;
```

# Capl

CAPL is an event-controlled programming language used for stimulating, simulating, testing, and diagnostics. CAPL is used by Vector tools like CANoe and CANalyzer and can be used for automating/semi-automating in a CAN environment.

Learn more at: [https://www.embeddedc.in/p/n-capl-can-accessprogramming-language-n.html?m=0](https://www.embeddedc.in/p/n-capl-can-accessprogramming-language-n.html?m=0)

Example Code:

```Capl
on start()
{
	write("This will be printed on start-up!");
}
```

# Cobol

COBOL is a compiled English-like computer programming language designed for business use. COBOL is used in company and government business, finance, and administrative systems.

Learn more at: [https://www.tutorialspoint.com/cobol/index.htm](https://www.tutorialspoint.com/cobol/index.htm)

Example Code:

```Cobol
IF WS-NUM3 = WS-NUM4 THEN
         DISPLAY 'IN LOOP 2 - IF BLOCK'
     ELSE
         DISPLAY 'IN LOOP 2 - ELSE BLOCK'
      END-IF
```

# F#

F# is a functional programming language for .NET Frameworks developed by Microsoft and first previewed in April of 2019. It is currently used by several companies including but not limited to: Walmart, Microsoft, Jet.com. It can also be easily used alongside or in place of any existing .NET framework applications using C#, Visual Basic, and C++.

Example Code:

```F#
let rec fiboRec =
  function
  | 0L -> 0L
  | 1L -> 1L
  | n -> fiboRec (n-1L) + fiboRec (n-2L)
```

# Fortran

Fortran is a general-purpose programming language developed in the 1950s that is suited for scientific computing and numeric computation. Fortran was initially developed for scientific and engineering applications and is used in high-performance computing in physics.

Learn more at: [https://fortran-lang.org/](https://fortran-lang.org/)

Example Code:

```Fortran
program read_value
  implicit none
  integer :: age
  print *, 'Please enter your age: '
  read(*,*) age
  print *, 'Your age is: ',age
end program read_value
```

# Haskell

Haskell is a functional programming language created in July 2010. It is used by many companies including but not limited to: Microsoft, Intel, AT&T, and NVIDIA. It's main purpose is to promote developing software through the paradigms of functional programming such as pure functions and immutable data.

Example Code:

```Haskell
fibonacci 0 = [0]
fibonacci 1 = [0, 1]
fibonacci n = next ++ [next!!(length next- 1) + next!!(length next- 2)]  where next = fibonacci(n-1)
fibonacci 16 -> [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]
```

# Hope

Hope is a functional programming language derived from NPL, and one of the first programming languages with call-by-pattern evaluation and algebraic data types.

Learn more at: [https://github.com/dmbaturin/hope](https://github.com/dmbaturin/hope)

Example Code:

```Hope
dec fact : num -> num;
--- fact 0 <= 1;
--- fact n <= n*fact(n-1);
```

# Java

Java is a programming language released by Oracle in May of 1995. It was developed to mimic the syntax of C/C++ with the added mindset of "compile once, run anywhere". Java is used my numerous companies and products throughout the world. Some notable applications of the language are Minecraft and the main language for developing Android Apps.

Example Code:

```Java
public class Fibonacci{
    public static void main(String []args){
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int result = fibonacci(n, 0, 1);
        System.out.println(result);
    }
    public static int fibonacci(int n, int a, int b) {
       if (n == 0) {
           return a;
       } else {
           return fibonacci(n-1, b, a + b);
       }
    }
}
```

# JavaScript

JavaScript is a scripting language first released on December 4th, 1995. It's predominantly used for websites and web applications to create dynamic web pages without having to embed other languages such as Java or Scheme.

Example Code from [here](https://pushingpixels.at/experiments/dynamic_shadow/):

```JavaScript
function moveShadow(){
    lightX          = parseInt(lightbulb.offset().left) + lightCenterX;
    lightY          = parseInt(lightbulb.offset().top) + lightCenterY;
    logoX           = parseInt(logo.offset().left) + logoCenterX;
    logoY           = parseInt(logo.offset().top) + logoCenterY;
    distanceX       = logoX - lightX;
    distanceY       = logoY - lightY;
    distance        = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    shadowDistance  = distance * shadowOffset;
    shadowPosLeft   = (distanceX / distance * shadowDistance + lightX - logoShdwCenterX) + "px";
    shadowPosTop    = (distanceY / distance * shadowDistance + lightY - logoShdwCenterY) + "px";
    logoshadow.css({ "left": shadowPosLeft, "top": shadowPosTop, "opacity": setOpacity(shadowDistance) });
}
```

# Kotlin

Kotlin is a general-purpose programming language initially designed for the JVM and Android that combines object-oriented and functional programming features. Kotlin is the official language of Android development, but also has a variety of applications, including server-side and client-side web development and data science.

Learn more at: [https://kotlinlang.org/](https://kotlinlang.org/)

```Kotlin
fun sum(a: Int, b: Int): Int {
    return a + b
}
```

# Lolcode

LolCode is an esoteric programming language released in 2007. As an esoteric language it was made as a joke and doesn't have any real users in the industry. However, it is really hilarious to work with!

Example Code:

```Lolcode
HAI 1.2
CAN HAS STDIO?
    VISIBLE "HAI, WORLD!!!1!~"
    VISIBLE "I DUZ YR FIBONACCI!!!1!~"
    HOW IZ I FIBONACCI YR N AN YR X AN YR Y
        BOTH SAEM 0 AN N, O RLY?
            YA RLY
                FOUND YR X
            NO WAI
                N R DIFF OF N AN 1
                X R SUM OF X AN Y
                I HAS A RESULT ITZ I IZ FIBONACCI YR N AN YR Y AN YR X MKAY
                FOUND YR RESULT
            OIC
    IF U SAY SO
    I HAS A index
    GIMMEH index
    I HAS A X ITZ 0
    I HAS A Y ITZ 1
    I HAS A RESULT ITZ I IZ FIBONACCI YR index AN YR X AN YR Y MKAY
    VISIBLE RESULT
KTHXBYE
HAI, WORLD!!!1!~
I DUZ YR FIBONACCI!!!1!~
In -> 8
21
```

# Malbolge

Malbolge is a domain specific esoteric programming language. It's designed to be almost impossible to use and it's similar to languages like Brainfuck.

Sample Code:

```Malbolge
(=<`#9]~6ZY32Vx/4Rs+0No-&Jk)"Fh}|Bcy?`=*z]Kw%oG4UUS0/@-ejc(:'8dc
Output: Hello World!
```

# MATLAB

MATLAB is a programming language designed specifically for engineers and scientists. With MATLAB you can do things like analyze data, develop algorithms, and to create models and applications.

Sample Code:

```MATLAB
Pyy = Y.*conj(Y)/251;
f = 1000/251*(0:127);
plot(f,Pyy(1:128))
title('Power spectral density')
xlabel('Frequency (Hz)')
```

# Modulaii

Modulaii is a procedural language developed between 1977 and 1985. It's seen as the successor to the earlier languages Pascal and Modula. It's mainly used for real-time embedded systems.

Example Code:

```Modula-2
MODULE Hello;
FROM STextIO IMPORT WriteString;
BEGIN
  WriteString("Hello World!");
END Hello.
```

# Perl

Perl is a general-purpose scripting language originally released in 1987. It has a wide variety of uses such as in web development, GUI development, and network programming.

Example Code:

```Perl
#!/usr/bin/perl 
$num = 7;
$txt = 'it is $num';
print $txt;
```

# PHP

PHP is a general-purpose scripting language suited or web development and can be embedded into HTML. PHP is used to create dynamic content and various server-side tasks such as creating, modifying, or deleting files, modifying database information, or encryption.

Learn more at: [https://www.php.net/manual/en/intro-whatis.php](https://www.php.net/manual/en/intro-whatis.php)

Example Code:

```PHP
<?php
echo $_SERVER['HTTP_USER_AGENT'];
?>
```

# Prolog

Prolog is a logic programing language. Unlike many languages it's a declarative language and it has an important role in artifical intelligence.

Example Code:

```Prolog
1. Here are some simple clauses.

likes(mary,food).
likes(mary,wine).
likes(john,wine).
likes(john,mary).
```

# Python

Python is an interpreted, high-level, general-purpose scripting language. It has a wide variety of uses such as in Web Development, Game Development, Machine Learning, and artificual intelligence.

Example Code:

```Python

# Function for nth Fibonacci number 
  
def Fibonacci(n): 
    if n<0: 
        print("Incorrect input") 
    # First Fibonacci number is 0 
    elif n==1: 
        return 0
    # Second Fibonacci number is 1 
    elif n==2: 
        return 1
    else: 
        return Fibonacci(n-1)+Fibonacci(n-2) 
  
# Driver Program 
  
print(Fibonacci(9)) 
  
#This code is contributed by Saket Modi 
```

# R

R is a programming language and environment developed for statistical computing and graphics. It is used commonly by statisticians,data analysts, and researchers to clean, analyze, and visualize data.

Learn more at: [https://www.r-project.org/about.html](https://www.r-project.org/about.html)

Example Programs: [https://www.tutorialspoint.com/r/r_basic_syntax.htm](https://www.tutorialspoint.com/r/r_basic_syntax.htm)

# Ruby

Ruby is a general purpose scripting language. It's an interpreted language and it's also dynamically typed. It's used commonly in web applications with frameworks like [Ruby on Rails](https://rubyonrails.org/) and [Sinatra](https://rubyonrails.org/).

Example Code:

```Ruby
def find_missing(sequence)
  consecutive     = sequence.each_cons(2)
  differences     = consecutive.map { |a,b| b - a }
  sequence        = differences.max_by { |n| differences.count(n) }
  missing_between = consecutive.find { |a,b| (b - a) != sequence }
  missing_between.first + sequence
end
find_missing([2,4,6,10])
# 8
```

# Rust

Rust is a multi-paradigm programming language designed for performance, saftey, and safe concurrency. It's syntatically similar to C++ but it can guarantee memory saftey by using a borrow checker to validate references. It's mainly used for systems programming.

```Rust
fn main() {
    // Variables can be type annotated.
    let logical: bool = true;

    let a_float: f64 = 1.0;  // Regular annotation
    let an_integer   = 5i32; // Suffix annotation

    // Or a default will be used.
    let default_float   = 3.0; // `f64`
    let default_integer = 7;   // `i32`
    
    // A type can also be inferred from context 
    let mut inferred_type = 12; // Type i64 is inferred from another line
    inferred_type = 4294967296i64;
    
    // A mutable variable's value can be changed.
    let mut mutable = 12; // Mutable `i32`
    mutable = 21;
    
    // Error! The type of a variable can't be changed.
    mutable = true;
    
    // Variables can be overwritten with shadowing.
    let mutable = true;
}
```

# Scheme

Scheme is a language first published in 1975 as an attempt to understand [Carl Hewitt's](https://en.wikipedia.org/wiki/Carl_Hewitt) [Actor model](https://en.wikipedia.org/wiki/Actor_model). It is a minimalist dialect of the Lisp Programming Language. Nowadays it is used by those wishing to explore language semantics.

Example code from [here](https://www.jdoodle.com/execute-scheme-online/):

```Scheme
(define (sum a b)
(display "x + y = ")
(display (+ a b)))

(sum 10 25)
(newline)
```

# SQL

SQL is a language to store, manipuldate, and retrieve data out of database. It's a domain-specific language used for relational database systems.

Example Code:

```SQL
CREATE TABLE emp (
empno INT PRIMARY KEY,
ename VARCHAR(10),
job VARCHAR(9),
mgr INT NULL,
hiredate DATETIME,
sal NUMERIC(7,2),
comm NUMERIC(7,2) NULL,
dept INT)
begin
insert into emp values
    (1,'JOHNSON','ADMIN',6,'12-17-1990',18000,NULL,4)
insert into emp values
    (2,'HARDING','MANAGER',9,'02-02-1998',52000,300,3)
```

# Tcl/Tk

Tcl is a general purpose dynamic programming language. It supports multiple programming paradigms such as object-oriented, and functional programming. The popular combination of Tcl is with the Tk extension which is refered to as Tcl/Tk which enables building native GUIs in TCL.

Example Code:

```Tcl/Tk
frame .launchpad 
button .launchpad.button1 -text "Data files" -command {exec command.com /c explorer "C:\\data" &}
pack .launchpad.button1 -side top -fill x

button .launchpad.button2 -text "ToDo List" -command {exec command.com /c notepad.exe "C:\\data\\myToDoList.txt" &}
pack .launchpad.button2 -side top -fill x

button .launchpad.button3 -text "the third button"
pack .launchpad.button3 -side top -fill x

pack .launchpad -side top
console hide
```

# VBA

VBA is an implementation of Microsoft's event-driven programming language Visual Basic 6 which was declared legacy in 2008. Although VB6 was declared legacy it was upgraded for use in Microsoft Office Applications and it's used for writing macros for those applications.

Example Code:

```VB
Sub If_Loop()
Dim Cell as Range
 
  For Each Cell In Range("A2:A6")
    If Cell.Value > 0 Then
      Cell.Offset(0, 1).Value = "Positive"
    ElseIf Cell.Value < 0 Then
      Cell.Offset(0, 1).Value = "Negative"
    Else
      Cell.Offset(0, 1).Value = "Zero"
     End If
  Next Cell
 
End Sub
```

# Whitespace

Whitespace is an esoteric programming language first released on April Fool's Day in 2003. The Whitespace intepreter ignores any non-whitespace characters and only spaces, tabs, and linefeeds have meaning.

Example Code:

```Whitespace
S S S T	S S T	S S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	S T	T	S S L
T	L
S S S S S T	T	S T	T	S S L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	S T	T	S S L
T	L
S S S S S T	S S S S S L
T	L
S S S S S T	T	T	S T	T	T	L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	S T	T	S S L
T	L
S S S S S T	T	S S T	S S L
T	L
S S S S S T	S S S S T	L
T	L
S S L
L
L

Output: Hello, world!
```