const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Wow! Love this!",
    post_id: 1,
    user_id: 3,
  },
  {
    comment_text: "Great article, can't wait to share.",
    post_id: 1,
    user_id: 2,
  },
  {
    comment_text: "So much this!!!",
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text: "Hmm... interesting.",
    post_id: 2,
    user_id: 1,
  },
  {
    comment_text: "Extra meow!",
    post_id: 3,
    user_id: 2,
  },
];

const commentSeeds = () => Comment.bulkCreate(commentdata);

module.exports = commentSeeds;
