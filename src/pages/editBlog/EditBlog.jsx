import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { BiArrowFromRight } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreateDate from "../../components/useCreateDate";
import "../createBlog/createBlog.css";

const CreateBlog = ({ blog, setBlog }) => {
  const { id } = useParams();
  const blogs = blog.find((item) => item.id === id);
  const [title, setTitle] = useState(blogs.title);
  const [details, setDetails] = useState(blogs.details);
  const [category, setCategory] = useState(blogs.category);
  const [name, setName] = useState(blogs.name);
  const [image, setImage] = useState(blogs.image);
  const [fileName, setFileName] = useState("No selected file");
  const navigate = useNavigate();
  const date = useCreateDate();

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details && category && name && image) {
      const newBlog = { ...blog, id, title, details, category, name, image, date };

      const newBlogs = blog.map((item) => {
        if (item.id === id) {
          item = newBlog;
        }
        return item;
      });
      setBlog(newBlogs);
    }
    navigate("/");
  };
  return (
    <div className="container2">
      <div className="leftData">
        <form className="create-blog__form ">
          <input
            type="text"
            placeholder="Blog Title"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Blog Category"
            autoFocus
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author Name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows="13"
            placeholder="Blog details..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          <div className="blog__buttons">
            <button className="btn" onClick={handleForm}>
              Update
            </button>
            <Link to="/" className="arrow-btn">
              <BiArrowFromRight className="btn-icon" /> go back
            </Link>
          </div>
        </form>
      </div>
      <div className="rightData">
        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {image ? (
            <img src={image} alt={fileName} />
          ) : (
            <>
              <MdCloudUpload color="black" size={60} />
              <p>Browse Files to upload</p>
            </>
          )}
        </form>

        <section className="uploaded-row">
          <AiFillFileImage color="#black" />
          <span className="upload-content">
            {fileName} -
            <MdDelete
              onClick={() => {
                setFileName("No selected File");
                setImage(null);
              }}
            />
          </span>
        </section>
      </div>
    </div>
  );
};

export default CreateBlog;
