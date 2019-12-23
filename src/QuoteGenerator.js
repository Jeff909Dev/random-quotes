import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Paper, Button, Typography} from '@material-ui/core'
import Quote from './Quote';
import { QUOTES_DB } from './MockedDB';
import random  from 'lodash.random'

class QuoteGenerator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quoteAuthor: '',
            quoteText: ''
        }
    }

    componentDidMount() {
        this.fetch_random_quote()
    }
    

    fetch_random_quote = () => {
        const {quoteAuthor, quoteText} = QUOTES_DB[random(0, QUOTES_DB.length)];
        this.setState({ quoteAuthor, quoteText})
    }


    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} xl={12} className="d-flex justify-content-center">
                        <Paper id="quote-box" className="p-4">
                            <Typography component="h5" variant="h5">
                                MACHINE QUOTE GENERATOR
                            </Typography>

                            <Quote data={this.state} />

                            <Button id="new-quote" color="primary" size="small" variant="contained" className="mt-3"
                                onClick={this.fetch_random_quote}>New quote</Button>

                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default QuoteGenerator;