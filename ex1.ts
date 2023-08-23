// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
   type: ItemType.Book,
   title: string,
   author: string  
}

interface DVD {
  type: ItemType.DVD,
  title: string,
  duration: number
}

// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: '/Users/davud/Downloads/ex1.ts', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items: (Book | DVD)[], filterTitle: string): (Book | DVD)[] {
  const filteredItems: (Book | DVD)[] = [];

  for (const item of items) {
    if (item.title === filterTitle) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}
//const filteredResults = filterItems(libraryItems, 'Avatar');
// console.log(filteredResults);

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData() {
  for (const key in libraryItems) {
    console.log(`${key}:${libraryItems[key]}`);
  }
  // Your code here
}
printItemsData(libraryItems)


// Step 5:  הדפיסו את כל המידע הנתון 

//console.log(libraryItems)

// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
function filterMovie(items: (Book | DVD)[], filterDuration: number): (Book | DVD)[] {
  const filteredItems: (Book | DVD)[] = [];

  for (const item of items) {
    if (item.duration >= 120 ) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}
// const filteredResults = filterMovie(libraryItems);
// console.log(filteredResults);


// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
function filterBook(items: (Book | DVD)[], filterAuthor: string): (Book | DVD)[] {
  const filteredItems: (Book | DVD)[] = [];

  for (const item of items) {
    if (item.author === 'Harper Lee' ) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}
const filteredResults = filterBook(libraryItems);
// console.log(filteredResults);

