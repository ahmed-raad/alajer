import React from 'react';
import icons from "./../common/Icons";

/**
 *
 *
 * @param {*} {id, title, description, authorName, authorJob, authorEmail}
 * @return {*} 
 */
const Comment = ({id, title, description, authorName, authorJob, authorEmail}) => {
    return ( 
        <div key={id} className="comment">

        <div className="comment_person">
            <img
                src="images/avatar.png"
                alt="صورة المستخدم"
            />
            <h3>{id}</h3>
            <h3 className="name">{authorName}</h3>
            <h3 className="job">{authorJob}</h3>
        </div>

        <div className="comment_text">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

        <div className="comment_send">
            <a href={`mailto:${authorEmail}?subject=${title}`}>
                {icons.PaperPlane}
            </a>
        </div>
        
        </div>
    );
}
 
export default Comment;
