
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


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SopherDavid/TypeScript.git
git push -u origin main