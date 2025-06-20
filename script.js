// List of 50 books and shops
const shops = [
    { name: "ABC Bookstore", address: "MG Road, Pune", books: ["Harry Potter", "Atomic Habits", "The Alchemist", "The Catcher in the Rye", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Hobbit"] },
    { name: "XYZ Books", address: "FC Road, Pune", books: ["Sapiens", "The Power of Habit", "The Art of War","Stranger things", "The Alchemist", "Educated", "Becoming", "Thinking, Fast and Slow", "The Subtle Art of Not Giving a F*ck", "Invisible Man", "Brave New World"] },
    { name: "Book World", address: "JM Road, Pune", books: ["Rich Dad Poor Dad", "Harry Potter", "Atomic Habits", "The Lean Startup", "Zero to One", "Steve Jobs", "Elon Musk", "The Innovator's Dilemma", "The Hard Thing About Hard Things", "Deep Work"] },
    { name: "Reader's Paradise", address: "Koregaon Park, Pune", books: ["The 7 Habits of Highly Effective People", "The Monk Who Sold His Ferrari", "Start with Why", "How to Win Friends and Influence People", "Man's Search for Meaning", "The Power of Now", "The Four Agreements", "The Secret", "The Magic of Thinking Big", "Daring Greatly"] },
    { name: "Book House", address: "Shivaji Nagar, Pune", books: ["The Catcher in the Rye","Stranger things", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Hobbit", "War and Peace", "Crime and Punishment", "Les Misérables"] },
    { name: "Modern Book Store", address: "Camp, Pune", books: ["Stranger things", ] }

];

// Get a list of unique books
const allBooks = Array.from(new Set(shops.flatMap(shop => shop.books)));

// Show suggestions in the dropdown as the user types
document.getElementById('bookName').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';
    
    if (query) {
        const filteredBooks = allBooks.filter(book => book.toLowerCase().includes(query));
        if (filteredBooks.length > 0) {
            suggestionsBox.style.display = 'block';
            filteredBooks.forEach(book => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = book;
                suggestionItem.addEventListener('click', () => {
                    document.getElementById('bookName').value = book;
                    suggestionsBox.style.display = 'none';
                });
                suggestionsBox.appendChild(suggestionItem);
            });
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Function to search for the book in shops
function searchBook() {
    const bookName = document.getElementById('bookName').value.trim().toLowerCase();
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';  // Clear previous results

    if (!bookName) {
        resultDiv.innerHTML = '<p>Please enter a book name.</p>';
        return;
    }

    const results = shops.filter(shop => shop.books.some(book => book.toLowerCase() === bookName));

    if (results.length > 0) {
        results.forEach(shop => {
            const shopInfo = `
                <div class="result-item">
                    <h2>${shop.name}</h2>
                    <p>Address: ${shop.address}</p>
                    <p>Available Books: ${shop.books.join(", ")}</p>
                </div>
            `;
            resultDiv.innerHTML += shopInfo;
        });
    } else {
        resultDiv.innerHTML = '<p>No shops found with this book in Pune.</p>';
    }
}

// Close suggestions when clicking outside the input
document.addEventListener('click', function(event) {
    const suggestionsBox = document.getElementById('suggestions');
    if (!document.getElementById('bookName').contains(event.target)) {
        suggestionsBox.style.display = 'none';
    }
});