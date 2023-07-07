import { useParams } from "react-router";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { TbEditCircleOff } from "react-icons/tb";
import { RiDeleteBin3Fill } from "react-icons/ri";

const Blog = ({ blog, setBlog }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = blog.find((item) => item.id === id);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newblog = blog.filter((item) => item.id !== id);

      setBlog(newblog);
      navigate("/");
    }
  };
  // useEffect(() => {
  //   const blogs = blog.find((item) => item.id === id);
  //   if (blogs) {
  //     setBlog(blogs);
  //   }
  // }, []);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <h2>{blogs.title}</h2>
            <p className="blog-date">Published {blogs.date} </p>
            <p className="blog-date">Published by: {blogs.name}</p>

            <div className="blog-Category">
              <Chip label={blogs.category} />
              <div className="blog-buttons">
                <Link to={`/edit-blog/${id}`} className="blog-icon">
                  <TbEditCircleOff />
                </Link>
                <button className="blog-icon" onClick={handleDelete}>
                  <RiDeleteBin3Fill />
                </button>
              </div>
            </div>
          </header>
          <img src={blogs.image} alt="cover" />
          <p className="blog-desc">{blogs.details}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
