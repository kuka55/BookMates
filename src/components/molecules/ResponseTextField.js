import React from 'react';
import {Grid, Box} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";
import {CommentBox, CommentsDivider, NewCommentTextField,SaveNewCommentButton} from "./ResponseTextField.styles";

const ResponseTextField = (props) => {
    let { topicId } = useParams();
    let newCommentField = document.getElementById("newComment")
    const handleSubmit = (comment) => {
        comment.preventDefault();
        const data = new FormData(comment.currentTarget);
        axios.post('http://localhost:8080/api/topics/' + topicId + '/comments', {
            commentMessage:data.get('newComment')
        })
            .then(response => {
                console.log(response)
                newCommentField.value=''
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <CommentBox >
            <CommentsDivider />
            <Grid container spacing={2} >
                <Grid item xs={12} sm container>
                    <Grid item xs>
                        <Box component="form" onSubmit={handleSubmit}>
                            <NewCommentTextField
                                id="newComment"
                                name="newComment"
                                label="Napisz komentarz"
                                multiline
                                rows={4}
                            />
                            <Grid item xs>
                                <SaveNewCommentButton type="submit" onClick={(props.comments)}>Dodaj komentarz</SaveNewCommentButton>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </CommentBox>
    )
}

export default ResponseTextField;