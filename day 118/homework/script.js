class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;  // Starts as available
    }

    // Method to borrow the item
    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is currently not available.`);
        }
    }

    // Method to return the item
    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`You have returned "${this.title}".`);
        } else {
            console.log(`"${this.title}" was not borrowed.`);
        }
    }
}
