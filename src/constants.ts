/* eslint-disable max-len */
export const LOCAL_STORAGE_INPUT_KEY = "input_key";

export const FAKE_IMAGE_URL =
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg";

export const API_URL = "https://the-one-api.dev/v2";
// token eQT0PS_X0w7MQDiNoPoE
export enum COUNTRY {
  US = "US",
  BELARUS = "BY",
  GEORGIA = "GE",
}

export const Countries = {
  [COUNTRY.US]: "United States",
  [COUNTRY.BELARUS]: "Belarus",
  [COUNTRY.GEORGIA]: "Georgia",
};

export const BOOKS = [
  {
    id: "1",
    author: "Douglas Crockford",
    imageLink: "https://m.media-amazon.com/images/I/5131OWtQRaL._AC_SY780_.jpg",
    title: "JavaScript: The Good Parts: The Good Parts",
    price: 30,
    description:
      "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "2",
    author: "David Herman",
    imageLink: "https://m.media-amazon.com/images/I/416VUkOt3QL._AC_SY780_.jpg",
    title: "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    price: 22,
    description:
      "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "3",
    author: "David Flanagan",
    imageLink: "https://m.media-amazon.com/images/I/510JjoNTdOL._AC_SY780_.jpg",
    title: "JavaScript: The Definitive Guide",
    price: 40,
    description:
      "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "4",
    author: "Eric Elliott",
    imageLink: "https://m.media-amazon.com/images/I/51t0zfcEBVL.jpg",
    title: "Programming JavaScript Applications",
    price: 19,
    description:
      "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "5",
    author: "Addy Osmani",
    imageLink: "https://m.media-amazon.com/images/I/51H-31ivMTL._AC_SY780_.jpg",
    title: "Learning JavaScript Design Patterns",
    price: 32,
    description:
      "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "6",
    author: "Boris Cherny",
    imageLink: "https://libribook.com/Images/programming-typescript-pdf.jpg",
    title: "Programming TypeScript",
    price: 28,
    description:
      "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "7",
    author: "Alex Banks, Eve Porcello",
    imageLink: "https://m.media-amazon.com/images/I/51Kwaw5nInL._AC_SY780_.jpg",
    title: "Learning React, 2nd Edition",
    price: 25,
    description:
      "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "8",
    author: "Bradley Meck Alex Young and Mike Cantelon",
    imageLink: "https://m.media-amazon.com/images/I/51twwFigyiL._AC_SY780_.jpg",
    title: "Node.js in Action",
    price: 38,
    description:
      "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "9",
    author: "Kyle Simpson",
    imageLink: "https://m.media-amazon.com/images/I/410f-bUBR3L.jpg",
    title: "You Don't Know JS Yet: Get Started",
    price: 26,
    description:
      "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
  {
    id: "10",
    author: "John Resig and Bear Bibeault",
    imageLink: "https://pictures.abebooks.com/isbn/9787115473264-us.jpg",
    title: "Secrets of the JavaScript Ninja",
    price: 33,
    description:
      "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
    isAdult: false,
    country: COUNTRY.US,
    quantityInStock: 4,
    isPaperVersion: true,
  },
];
