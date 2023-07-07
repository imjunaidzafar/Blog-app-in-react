import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { BiArrowFromRight } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreateDate from "../../components/useCreateDate";
import "./createBlog.css";

const CreateBlog = ({ setBlog }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const navigate = useNavigate();
  const date = useCreateDate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details && category && name && image) {
      const blog = { id: uuid(), title, details, category, name, image, date };
      setBlog((prevBlogs) => [blog, ...prevBlogs]);
      navigate("/");
    }
  };
  return (
    <div className="container2">
      <div className="leftData">
        <form className="create-blog__form " onSubmit={handleSubmit}>
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
            <button className="btn" onClick={handleSubmit}>
              Post
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
        {image ? (
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CreateBlog;
