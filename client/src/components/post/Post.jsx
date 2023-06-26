import { Link } from "react-router-dom";
import "./post.css";
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <Link className="link" to={`/post/${post._id}`}>
    <div className="post">
      {post.photo && (<img className="postImg" src={PF + post.photo} alt="" />)}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <div className="postCat">{category.name}</div>
          ))}
        </div>
          <span className="postTitle">
            {post.title}
          </span>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <div className="postDesc">
        {post.desc}
      </div>
    </div>
    </Link>
  )
}
