import React from "react";

const NewComment = ({pageTitle, commentTitle, commentDescr, Title, Description, handleTitle, handleDescription, handleSubmit}) => {
    return (
      <div className="new-wrapper">
        <h1>{pageTitle}</h1>
        <form className="new-form">

            <div className="new-item">
              <label>
                <p className="new-title">{commentTitle}</p>
                <input
                  name="title"
                  type="text"
                  value={Title}
                  onChange={handleTitle}
                  required
                />
              </label>
            </div>

            <div className="new-item">
              <label>
                <p className="new-detail">
                    {commentDescr}
                </p>
                <textarea
                  name="description"
                  value={Description}
                  onChange={handleDescription}
                  required
                ></textarea>
              </label>
            </div>

            <div>
              <button
                className="new-button"
                onClick={handleSubmit}
                type="button"
              >
                نشر الطلب
              </button>
            </div>
          
        </form>
      </div>
    );
}
 
export default NewComment;