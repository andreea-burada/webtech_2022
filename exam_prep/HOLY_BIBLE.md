# <img height="35px" src="https://www.svgrepo.com/show/419357/bible-book-christian.svg"/> Holy Bible
### • [Javascript](#javascript)
### • [Express](#express-rest)
### • [React](#react)
# Javascript

## Given the function `calculateFrequencies(input, stopWords)` where:
- `input` is a string (e.g. "This is an orange cat")
- `stopWords` is a vector containing strings.

## Complete the following tasks:
- `input` should be of type `string` or `String`. If another type is given an `Error` is thrown with the message `Input should be a string or a String`; (0.5 pts)
- `dictionary` is an array of `string` or `String`. If at least an element is not a `string` an `Error` is thrown with the message `Invalid dictionary format`; (0.5 pts)
- the function will calculate the relative frequencies of words in input and return a dictionary containing words as keys and frequencies as values (e.g. for the string 'orange cat' the result will be {orange : 0.5, cat : 0.5}); (0.5 pts)
- if stopWords contains any words, they will be ignored in the result (e.g. for the string 'the orange cat' with 'the' defined as a stopword the result will be {orange : 0.5, cat : 0.5}); (0.5 pts)
- the function also returns the correct result for words starting with a capital letter, which are considered identical to their lowercase variant. (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2020_subjects/var-1">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Given the server `server.js` and the file `index.html` in the `public` directory:

## Complete the following tasks:
- the file `index.html`, which contains the text `A simple app` should be delivered from the server as static content (0.5 pts);
- a button with the id `del` exists in the page and can be clicked (0.5 pts);
- on page load, all elements are loaded in the table with the id `main` with a `tr` for each car (0.5 pts);
- when the button with the id `del` is clicked, elements with the name specified in the `name` text input are deleted (0.5 pts);
- elements with the name selected for deletion no longer appear in the table (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2020_subjects/var-2%20%5Bsimple%5D">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Given the classes `Duck` and `RubberDuck` where:
- a `Duck` is constructed based on a string name
- a `Duck` can swim
- a `RubberDuck` can float
- a `RubberDuck` can't swim

## Complete the following tasks:
- `name` should be of type `string` or `String`. If another type is given an `Error` is thrown with the message `name must be string or String`; (0.5 pts)
- if a duck is instructed to swim it will return a string saying it is swimming (e.g. if the duck is named `Donald` then the returned string is `Donald is swimming`); (0.5 pts)
- a rubber duck is both a `Duck` and a `RubberDuck`; (0.5 pts)
- if a rubber duck is instructed to float it will return a string saying it floats (e.g. if the rubber duck is named `Donald` then the returned string is `Donald floats`); (0.5 pts)
- if a rubber duck is instructed to swim it will return a string saying cannot swim (e.g. if the rubber duck is named `Donald` then the returned string is `Donald can't swim, only float`); (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2020_subjects/var-2">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the files `app.js` and `index.html` from `public` directory:

## Complete the following tasks:
- `index.html` file should be delivered as static content from the `public` directory. It shoudl contain a `paragraph` element with `Webtech app` text (0.5 pts);
- Buttons with `ids` `load` and `delete` should exist in the `html` page and they are not disabled (0.5 pts);
- Clicking the button with the id `load` should load all the elements from `data.json` file and render them inside the table with id `table` with a `tr` for each element and 3 `tds` for each property (0.5 pts);
- Text input with id `name` should exist in the html page (0.5 pts);
- When pressing the button with the id `delete`, the application should erase the element with `name` property equals with the value introduced in the text input with the id `name` (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2020_subjects/var-3%20%5Bsimple%5D">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the class `Queue` from file `index.js` implement the following tasks: 
- Class `Queue` should contain a property called `items`, of type `Array` that will be initialized with an empty array (0.5 pts);
- Implement method `insert` that accepts `element` as an argument, which will be added in the array, according to the queue's principle;
- The method `insert` will allow only `string` elements to be added into the queue and will throw an Error with the text `Invalid Type` for other types.
- Implement method `extract` that will return an `element` from the array, according to the queue's principle;
- If the array is empty and the `extract` method is called, it will throw an Error with the text `Invalid Operation`;

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2020_subjects/var-3">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Given the function `bowdlerize(input, dictionary)` where:
- `input` is a string (e.g. "This is a cat")
- `dictionary` is a vector containing strings.

## Complete the following tasks:
- `input` should be of type `string`. If another type is given an `Error` is thrown with the message `Input should be a string`; (0.5 pts)
- `dictionary` is an array of `string`. If at least an element is not a `string` an `Error` is thrown with the message `Invalid dictionary format`; (0.5 pts)
- If `dictionary` contains words, they will be replaced in `input` with the first letter followed by a series of  `*` characters followed by the last letter. The length of the resulting word will be the same as the original (e.g. 'test' will become 't**t'); (0.5 pts)
- A new string wil be returned, with `input` remaining unmodified; (0.5 pts)
- The function also returns the correct result for words starting with a capital letter. (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-02_var-0">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-03_var-0">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2023_subjects/%5BA%5Dfeb-03_var-0">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Given the server `server.js` and the file `index.html` in the `public` directory:

## Complete the following tasks:
- the file `index.html`, which contains the text `A simple app` should be delivered from the server as static content (0.5 pts);
- a button with the id `reload` exists in the page and can be clicked (0.5 pts);
- when the button with the id `reload` is clicked with nothing in the filter, all elements are returned(0.5 pts);
- when the button with the id `reload` is clicked with `red` in the filter, elements with color `red` are returned(0.5 pts);
- when the button with the id `reload` is clicked with  a filter color which does not match anything an empty list is returned(0.5 pts); (0.5 pts);


### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-02_var-1">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-03_var-1">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Given the server `app.js` and the file `index.html` in the `public` directory:

## Complete the following tasks:
- the file `index.html`, which contains the text `A simple app` should be delivered from the server as static content (0.5 pts);
- a button with the id `load` exists in the page and can be clicked (0.5 pts);
- when the button with the id `load` is clicked, a list of cars should be fetched from the server; cars with the color `red` loaded in the table with the id `main` with a `tr` for each car (0.5 pts);
- the table contains a `tr` for each car loaded from the server (0.5 pts);
- only `red` cars are shown (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-05_var-0">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2023_subjects/%5BB%5Dfeb-03_var-0">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Given the function  `removeOrderItem(orderInfo, position)` where:
- `orderInfo` is an object with the properties total and items
- `position` is an integer that determines one element in items

## Completati urmatoarele taskuri:
- validate `items` to be an `array`. If another type is given an error is thrown with the message `Items should be an array`; (0.5 pts)
- Each object from `items` should have the properties price and quantity. If at least one element is malformed an error is thrown with the message `Malformed item`; (0.5 pts)
- `position` is validated in relation with the items array (0.5 pts)
- the function will return orderInfo without the element on the given position (0.5 pts)
- the total will be updated with the new order content. (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-05_var-4">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2023_subjects/%5BB%5Dfeb-03_var-4">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the files `app.js` and `index.html` from `public` directory:

## Complete the following tasks:
- `index.html` file should be delivered as static content from the `public` directory. It shoudl contain a `paragraph` element with `Webtech app` text (0.5 pts);
- Buttons with `ids` `load` and `delete` should exist in the `html` page and they are not disabled (0.5 pts);
- Clicking the button with the id `load` should load all the elements from `data.json` file and render them inside the table with id `table` with a `tr` for each element and 3 `tds` for each property (0.5 pts);
- Text input with id `name` should exist in the html page (0.5 pts);
- When pressing the button with the id `delete`, the application should erase the element with `name` property equals with the value introduced in the text input with the id `name` (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-09_var-3">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-12_var-3">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the `function addTokens(input, tokens)` where:
- `input` is a string that could contain "..." for example: Subsemnatul ..., dominiciliat in ...;
- `tokens` is an array with token names .
- The function should replace each `...` from `input` with the values from `tokens` in the following format `${tokenName}`;

## Complete the following tasks:

- `input` should be a `string`. If other type is passed throw an `Error` with the message `Input should be a string`; (0.5 pts)
- `input` should be at least 6 characters long. If `input` length is less than 6 throw an `Error` with the message `Input should have at least 6 characters`; (0.5 pts)
- `tokens` is an array with elements with the following format: `{tokenName: string}`. If this format is not respected throw an `Error` with the following message `Invalid array format`; (0.5 pts)
- If `input` don't contain any `...` return the initial value of `input`; (0.5 pts)
- If `input` contains `...`, replace them with the specific values and return the new `input`; (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-12_var-8">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Given the server `app.js` and the file `index.html` in the `public` directory:

## Complete the following tasks:
- the static content in public directory is delivered by the server(0.5 pts);
-  `profil.json` has the structure required in the test (0.5 pts)
- the page `index.html` has a first rang title containing the text `Profil Influencer` (0.5 pts)
- profile details (name, instagram, youtube) are displayed in separate paragraphs in the div-ul with id=content (0.5 pts) 
- the button with will convert instagram followers into milions (ex 5M); this is executed only on the client side  (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2023_subjects/%5BA%5Dfeb-03_var-4">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the `function applyDiscount(vehicles, discount)`, complete the following tasks:

 - Function should return a Promise; (0.5 pts)
 - If `discount` is not a number, the function should `reject` an `Error` with the message `Invalid discount`; (0.5 pts)
 - `vehicles` is an array that contains objects with the following format: `{make: string, price: number}` (Example: [{make: "Audi A5", price: 15000}]). If an array with invalid objects is passed then the function should `reject` an `Error` with the message `Invalid array format`; (0.5 pts)
 - Function should `reject` a `string` with the value `Discount too big` if `discount` is greater than 50% of the min price from `vehicles` array; (0.5 pts)
 - Function should `resolve` an array with applied discount to each `vehicle price`; (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/javascript/2021_subjects/feb-09_var-7">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

# Express (REST)

## Having the following application developed using NodeJS, complete the `PUT` and `DELETE` methods on path `/ships/id` :

- If attempting to update a non existent ship the response should be `{"message": "not found"}`. Response status code should be: `404`; (0.5 pts)
- If correctly updating an existent ship the response should be: `{"message": "accepted"}`. Response status code should be: `202`; (0.5 pts)
- A subsequent request for the edited ship should show the modifications. Response status code should be: `200`; (0.5 pts)
- If correctly deleting an existent ship the response should be: `{"message": "accepted"}`. Response status code should be: `202`; (0.5 pts)
- A subsequent request for the deleted ship should return `{"message": "not found"}`. Response status code should be: `404`; (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2020_subjects/var-1">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the `app.js` file complete `POST` and `DELETE` methods on paths `/device` and `/device/:id`:
- `POST /device` returns status code 400 and response `{message: 'bad request'}` if `body` is null (0.5 pts);
- `POST /device` returns status code 400 and response `{message: 'bad request'}` if `price < 0` (0.5 pts);
- `POST /device` returns status code 400 and response `{message: 'bad request'}` if `name contains less than 4 characters` (0.5 pts);
- `POST /device` returns status code 201 and response `{message: "device created"}` if `body is valid` (0.5 pts);
- `DELETE /device/:id` returns status code 202 and response `{message: "device deleted"}` if `id` for a device is present in the database (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2021_subjects/feb-02_var-3">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2021_subjects/feb-03_var-3">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2023_subjects/%5BB%5Dfeb-03_var-3">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the following application developed using NodeJS, complete the `POST` method on path `/ships` :

- If no request body is present you should return a json with the following format: `{"message": "body is missing"}`. Response status code should be: `400`; (0.5 pts)
- If the request body properties are missing you should return a json with the following format: `{"message": "malformed request"}`. Response status code should be: `400`; (0.5 pts)
- Displacement should be over 1000, otherwise the server should return a message with the following format: `{"message": "displacement should be over 1000"}`. Response status code should be: `400`; (0.5 pts)
- If the ship is valid, it should be added and a response with the code `201` should be returned. The response body should be `{"message": "created"}`;(0.5 pts)
- If a `GET /ships` request is performed subsequently, the body should contain 11 `ships`, including the one previoulsy added; (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2021_subjects/feb-05_var-0">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the following `app` complete the method `GET` at the enpoint `/homeworks` and the method `GET` at the endpoint `/homeworks/id` so that:

- when GET /homeworks is called without any params it will return all entries in the database (0.5p)
- when GET /homeworks is called with the param pass=true it will return all homeworks that are >= 5 (0.5p)
- when GET /homeworks/id is called with a id not present in the database will return status code `404`(0.5p)
- when GET /homeworks/id is called with a valid id will return a json object (0.5p)
- if the client only accepts `text/plain` GET /homeworks/id will return only the content

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2021_subjects/feb-09_var-4">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---


## Having the following application developed using NodeJS, complete the `GET` method on path `/ships` :
- supported query params are `page` and `pageSize`

- If no page or page size is specified, all ships are returned; (0.5 pts)
- If a page is specified, but no page size, the page size is assumed to be 5 and the nth page of 5 is returned (0.5 pts)
- If both page and page size are specified, the page-th page of the specified size is returned (0.5 pts)
- If a malformed page or page size is specified, all ships are returned; (0.5 pts)
- If the specified page is beyond the last available record, an empty array of pages is returned. (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2021_subjects/feb-12_var-2">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2023_subjects/%5BA%5Dfeb-03_var-2">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the following application developed using NodeJS, complete the `POST` method on path `/students` :

- If no request body is present you should return a json with the following format: `{"message": "body is missing"}`. Response status code should be: `400`; (0.5 pts)
- If the request body properties are missing you should return a json with the following format: `{"message": "malformed request"}`. Response status code should be: `400`; (0.5 pts)
- Age  should be positive, otherwise return a json with the following format: `{"message": "age should be a positive number"}`. Response status code should be: `400`; (0.5 pts)
- If the student is valid, it should be added and a reponse with the code `201` should be returned. The response body should be `{"message": "created"}`;(0.5 pts)
- If a `GET /students` request is performed, the body should contain 11 `students`, including the one previoulsy added; (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/express/2023_tutoring/main">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

# React

## Having the following application created with `create-react-app` add a `Company` component and modify `CompanyList` so that:
- the app renders correctly (0.5 pts);
- `CompanyList` is rendered as a child of `App` (0.5 pts);
- `CompanyList` is rendered as a list of `Company` (0.5 pts);
- `Company` has a property called item containing the company it's supposed to render (0.5 pts);
- `Company` can be deleted via a button with the label `delete` (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2020_subjects/var-0">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the following automatic vending machine created with `create-react-app` modify it so that:
- the app renders correctly (0.5 pts);
- the list of products is loaded from the ProductStore when `VendingMachine` is rendered (0.5 pts)
- add the component `Product` to display the name, price and a button with the label buy that calls the onBuy method recieved by props (0.5 pts)
- implement addTokens that increments the number of tokens by 1 at each press of the add token button (0.5 pts)
- implement buyProduct thet substracts the tokens with the price of the product; if there are not enough tokens nothing happens (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2021_subjects/feb-02_var-4">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2021_subjects/feb-03_var-4">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2021_subjects/feb-05_var-4">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the following application created with `create-react-app` modify `Company` component and modify `CompanyList` so that:
- the app renders correctly (0.5 pts);
- `CompanyList` is rendered as a list of `Company` and each `Company` has a button labeled `edit`(0.5 pts);
- If the edit button is clicked on a `Company` it goes into edit mode (0.5 pts);
- If a `Company` is in edit mode and the button labeled `cancel` is clicked, it goes into view mode (0.5 pts);
- A company can be saved and the changes are reflected in the company list (0.5 pts);


### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2021_subjects/feb-09_var-1">
  <img height="30px" width="35px" style="margin-top:20px" title="old React version" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
  
---

## Having the following application created with `create-react-app` modify `Company` component and add `CompanyDetails` so that:
- the app renders correctly (0.5 pts);
- `CompanyList` is rendered as a list of `Company` and each `Company` has a button labeled `select`(0.5 pts);
- `CompanyDetails` has a property called item containing the company whose details it's supposed to render (0.5 pts);
- If the select button is clicked on a `Company` the details component is shown (0.5 pts);
- If the `CompanyDetails` component is shownand the button labeled `cancel` is clicked, the company list is displayed (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2021_subjects/feb-12_var-2">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the following application created with `create-react-app` modify `Company` component and modify `CompanyList` so that:
- the app renders correctly (0.5 pts);
- a company list with edit buttons is rendered(0.5 pts);
- If the edit button is clicked on a company it goes into edit mode (0.5 pts);
- If a company is in edit mode and the button labeled `cancel` is clicked, it goes into view mode (0.5 pts);
- A company can be saved and the changes are reflected in the company list (0.5 pts);

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2023_subjects/A-feb-03_var-1">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---


## Having the following application created with `create-react-app` complete the following tasks:
- `AddDevice` component should be rendered inside `DeviceList` component;
- `AddDevice` component should contain 2 inputs with `placeholder`: `name` and `price`;
- `AddDevice` component should contain a `button` with the value `add`, used to trigger `addItem` method;
- `AddDevice` component inside `DeviceList` should contain a `props` called `onAdd`;
- When pressing `add` button a new item should be displayed and added to the state of `DeviceList` component;

### USEFUL INFORMATION: Objects that are added in the array of the `DeviceList` component state have the following structure: { name: String, price: Number }. 

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2023_subjects/B-feb-03_var-3">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>

---

## Having the following application developed using React complete the project so that :

- The application renders without crashing; (0.5 pts)
- A RobotForm component is rendered; (0.5 pts)
- The RobotForm has inputs for `name`, `type` și `mass` (0.5 pts)
- Given that the inputs for the robot properties have the ids `name`, `type` and `mass` and that the add button has the value `add` a robot can be successfully added;(0.5 pts)
- After adding a robot, the fields are reset to their initial value (0.5 pts)

### Link:
<a href="https://github.com/andreea-burada/webtech_2022/tree/main/exam_prep/react/2023_tutoring/main">
  <img height="30px" width="35px" style="margin-top:20px" src="https://raw.githubusercontent.com/andreea-burada/webtech_2022/main/exam_prep/icons/link_icon.svg">
</a>
