const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public_html'));

app.get('/books', (req, res) => {
    const books = [
        { title: 'House of Leaves', author: 'Mark Danielewski', isbn: '2002' },
        { title: 'Shogun', author: 'James Clavell', isbn: '8122' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '5472' },
        { title: 'Brave New World', author: 'Aldous Huxley', isbn: '1153' },
        { title: 'Blood Meridian; or The Evening Redness in the West', author: 'Cormac McCarthy', isbn: '4385' },
        { title: 'The Iliad', author: 'Homer', isbn: '1507' },
        { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', isbn: '7083' },
        { title: 'The Old Man and the Sea', author: 'Ernest Hemingway', isbn: '6396' },
        { title: '1984', author: 'George Orwell', isbn: '6592' },
        { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', isbn: '2213' },
        { title: 'Rebecca', author: 'Daphne Du Maurier', isbn: '4990' },
        { title: 'Ham on Rye', author: 'Charles Bukowski', isbn: '9001' },
        { title: 'Beloved', author: 'Toni Morrison', isbn: '8021' },
        { title: "Giovanni's Room", author: 'James Baldwin', isbn: '0873' },
        { title: '2666', author: 'Roberto Bolano', isbn: '4205' },
        { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', isbn: '1234' },
        { title: 'The Metamorphosis', author: 'Franz Kafka', isbn: '6592' },
        { title: 'Notes from Underground', author: 'Fyodor Dostoevsky', isbn: '8372' },
        { title: 'White Nights', author: 'Fyodor Dostoevsky', isbn: '9312' },
        { title: 'Stories of Your Life', author: 'Ted Chiang', isbn: '2097' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '2345' },
        { title: 'The Stranger', author: 'Albert Camus', isbn: '5206' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '0982' },
        { title: 'Station Eleven', author: 'Emily St. John Mandel', isbn: '5491' },
        { title: 'Fear and Loathing in Las Vegas', author: 'Hunter S. Thompson', isbn: '9671' },
        { title: 'The Stranger', author: 'Albert Camus', isbn: '8206' },
        { title: 'Dune', author: 'Frank Herbert', isbn: '6071' },
        { title: 'The Road', author: 'Cormac McCarthy', isbn: '2391' },
        { title: 'A Gentleman in Moscow', author: 'Amor Towles', isbn: '8021' },
        { title: 'The Doors of Perception', author: 'Aldous Huxley', isbn: '5206' }
    ];
    res.json(books);
});

app.listen(port, () => {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log(`Type Ctrl+C to shut down the web server`);
  });