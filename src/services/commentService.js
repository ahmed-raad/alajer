import httpService from "./httpService";
import { apiUrl } from "../config.json";

async function get_comments (subDirectory) {
    const getUsers = () => {
        return httpService.get(`${apiUrl}/users`);
    };

    const getComments = () => {
        return httpService.get(`${apiUrl}/${subDirectory}`);
    }

    let promise = await Promise.all([
      getUsers(),
      getComments(),
    ]);

    const allUsers = promise[0].data;
    const allComments = promise[1].data.sort((a, b) => b.id - a.id);

    const comments = allComments.map(com => {
      const author = allUsers.find(u => u.id === com.authorId);
      com.authorName = author.fullname;
      com.authorJob = author.job;
      com.authorEmail = author.email;
      return com;
    })
    return comments;
}

async function new_comment (subDirectory, title, description, userId) {
    let body = {
      title: title,
      description: description,
      authorId: userId
    };

    const newComment = await httpService.post(`${apiUrl}/${subDirectory}`, body);
    return newComment;
}

export default {
    get_comments: get_comments,
    new_comment: new_comment
}