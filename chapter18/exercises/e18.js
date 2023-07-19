// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numberOfPages = numberOfPages;
        this.numberOfTimesCheckedOut = numberOfTimesCheckedOut;
        this.discarded = discarded;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded){
        super(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded);

    }
    oldBook(currentYear){
        if(currentYear - this.copyrightDate > 5){
            this.discarded = 'Yes';
        };
    }
};


class Novel extends Book{
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded){
        super(title, author, copyrightDate, ISBN, numberOfPages, numberOfTimesCheckedOut, discarded);
    }
    usedBook(){
        if(this.numberOfTimesCheckedOut > 100){
            this.discarded = "Yes";
        };
    }
};


// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');

let topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
prideAndPrejudice.numberOfTimesCheckedOut = 37;
console.log(prideAndPrejudice.numberOfTimesCheckedOut);
console.log(prideAndPrejudice);
topSecretShuttleBuildingManual.oldBook(2023);
console.log(topSecretShuttleBuildingManual);