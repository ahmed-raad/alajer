import React from "react";
import AddingCircleBtn from "./AddingCircleBtn";
import Comments from "./Comments";
import ReactPaginate from "react-paginate";
import icons from "./../../Components/common/Icons";

/**
 *
 *
 * @param {*} {newCommentLink, comments, firstInPage, usersPerPage, pageCount, onPageChange}
 * @return {*} 
 */
const CommentPage = props => {
    const {newCommentLink, comments, firstInPage, usersPerPage, pageCount, onPageChange} = props;
    return (
        <div className="comments_page">

            <AddingCircleBtn
                link={newCommentLink}
            />

            <div>
                <Comments 
                    comments = {comments}
                    firstInPage = {firstInPage}
                    itemsPerPage = {usersPerPage}
                />

                <ReactPaginate
                    previousLabel={icons.AngleDoubleRight}
                    nextLabel={icons.AngleDoubleLeft}
                    pageCount={pageCount}
                    onPageChange={onPageChange}
                    containerClassName={"paginateList"}
                    previousLinkClassName={"arrowBtn"}
                    nextLinkClassName={"arrowBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    pageLinkClassName={"paginateBtn"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                />
            </div>
        </div>
    );
}
 
export default CommentPage;