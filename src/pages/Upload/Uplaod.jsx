import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

const Uplaod = () => {
  const [postPhotos, setPostPhotos] = useState([]);

  const handlePostPhotoUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setPostPhotos((prevState) => [...prevState, ...uploadedImages]);
  };

  const handlePreviewDelete = (item) => {
    const updatedImage = postPhotos.filter((data) => data !== item);
    setPostPhotos([...updatedImage]);
  };

  const handlePostPhotoUplaod = (e) => {
    e.preventDefault();

    const data = new FormData();

    postPhotos.forEach((item) => {
      data.append("photo", item);
    });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center my-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <input onChange={handlePostPhotoUpload} type="file" multiple />
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handlePostPhotoUplaod}>
        <div className="row justify-content-center my-5">
          {postPhotos.map((item, index) => {
            const imageUrl = URL.createObjectURL(item);

            return (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img
                    style={{ height: "300px", objectFit: "cover" }}
                    src={imageUrl}
                    alt=""
                  />
                  <div className="card-footer">
                    <button
                      className="btn btn-danger  btn-sm"
                      onClick={() => handlePreviewDelete(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Uplaod;
