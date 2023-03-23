import './styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const BookHeader = ({ book }) => {
    console.log(book.rating);
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img className="img" src="http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt={`Cover for ${book.title}`} />
                </Grid>
                <Grid item xs={8}>
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-author">by {book.author}</p>
                    <Typography component="legend">Rating</Typography>
                    <Rating name="customized-10" value={Math.round(book.rating)} max={10} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BookHeader;