import React, { Fragment } from 'react';
import { CardContent, Typography, CardMedia, Card, makeStyles, Button, CardActionArea, CardActions, Link } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
  })

const Quote = ({ data }) => {

    const classes = useStyles();

    return (
        <Fragment>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia component="img" alt="Quote" height="140" image="https://picsum.photos/seed/picsum/600" title="Quote" />
                    <CardContent>
                        <Typography id="author" gutterBottom variant="h5" component="h2">
                            {data.quoteAuthor && data.quoteAuthor}
                        </Typography>
                        <Typography id="text" variant="body2" color="textSecondary" component="p">
                            {data.quoteText && data.quoteText}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Link href="twitter.com/intent/tweet" id="tweet-quote" size="small" color="primary">
                        <b>Share</b>
                    </Link>
                </CardActions>
            </Card>
        </Fragment>
    );
}

export default Quote;