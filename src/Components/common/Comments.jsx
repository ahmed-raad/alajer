import React from "react";
import Comment from "./Comment";

/**
 *
 *
 * @param {*} {comments, firstInPage, itemsPerPage}
 * 
 * comments = [{
*   id: number,
*   title: string,
*   description: string,
*   authorName: string,
*   authorJob: string,
*   authorEmail: string
 * }, ...]
 * 
 * @return {*} 
 */
const Comments = ({comments, firstInPage, itemsPerPage}) => {
    return comments
        .slice(firstInPage, firstInPage + itemsPerPage)
        .map(comment => (
            <Comment
                id={comment.id}
                title={comment.title}
                description={comment.description}
                authorName={comment.authorName}
                authorJob={comment.authorJob}
                authorEmail={comment.authorEmail}
            />
        ));
}
 
export default Comments;