
//1.
function returnGrater(num1: number, num2: number) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
//console.log(returnGrater(80,1))

// 2.
function findGrater(num1: number, num2: number) {
    if (num1 > num2) {
        console.log(num1 +" is grater")
    } else {
            console.log(num2 +" is grater")
    }
}
//findGrater(80, 35)

// 3.
function oddOrEven(num: number) {
    if (num % 2 === 0) {
        return "The number you've entered is even"
    } else {
        return "The number you've entered is odd"

    }
}
//console.log(oddOrEven(88))

//4.
function stringLength (string: string) {
    console.log(string.length)
}

//stringLength("how long am i?")

// 5.
function printTillNum(num: number) {
   let counter: number = 1
   while (counter <= num) {
       console.log(counter)
       counter ++
  }  
}
//console.log(printTillNum(1000))

// 6.
function findMaxNumber(numbers: number[]): number {
    let max = numbers[0];
    for (const num of numbers) {
      if (num > max) {
        max = num;
      }
    }
    return max;
}
  
//   const numbersArray = [23, 8, 42, 15, 6];
//   const maxNumber = findMaxNumber(numbersArray);
//   console.log(`The greatest number is: ${maxNumber}`);

// 7.
interface Person {
        name:  string;
        age: number;
        isStudent: boolean;
}

// 8.
function printPerson(person: Person): void {
    for (const key in person) {
        console.log(`${key}:${person[key]}`);

    }
}
// printPerson( {
//     name: "David",
//     age : 28,
//     isStudent : true
// })

// 9.
function ageAuthenticator(person: Person) {
    if (person.age < 8) {
        console.log("True")
    } else{
        console.log("False")
    }
}

//ageAuthenticator( {
    //     name: "David",
    //     age : 28,
    //     isStudent : true
    // })



// 10. 
interface Book {
    title: string
    author: string 
    year: number
}

// 11.
interface Reader {
    person: Person,
    favoriteBook: Book
}

// 12.
const readers: Reader[] = [
    {
      person: { name: "Alice", age: 25, isStudent: false },
      favoriteBook: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    },
    {
      person: { name: "Bob", age: 30, isStudent: true },
      favoriteBook: { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    },
    {
      person: { name: "Charlie", age: 22, isStudent: true },
      favoriteBook: { title: "1984", author: "George Orwell", year: 1949 },
    },
    {
      person: { name: "Eve", age: 95, isStudent: false },
      favoriteBook: { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    },
    {
      person: { name: "David", age: 35, isStudent: false },
      favoriteBook: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    },
  ];

  function findOldestReader(readers: Reader[]): Reader | undefined {
    let oldest: Reader | undefined = undefined;
    
    for (const reader of readers) {
      if (!oldest || reader.person.age > oldest.person.age) {
        oldest = reader;
      }
    }
    
    return oldest;
  }
  
  const oldestReader = findOldestReader(readers);

  // if (oldestReader) {
  //   console.log(`The oldest reader is ${oldestReader.person.name}, aged ${oldestReader.person.age}.`);
  //   console.log(`Their favorite book is "${oldestReader.favoriteBook.title}" by ${oldestReader.favoriteBook.author}, published in ${oldestReader.favoriteBook.year}.`);
  // } else {
  //   console.log("No readers found.");
  // }
  