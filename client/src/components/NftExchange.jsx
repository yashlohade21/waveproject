import React, { useState } from 'react';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { Link } from 'react-router-dom';
import NftImage from './NftImage';

const projectId = "2QKdzJwBEMwgmSnfw1sbTmmhe8R";
const projectSecretKey = "189020166ec43723c56fabfe9aa4d679";
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

const ipfs = ipfsHttpClient({
  url: "https://ipfs.infura.io:5001",
  headers: {
    authorization
  }
});

function NftExchange() {
  const [images, setImages] = useState([]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    const result = await ipfs.add(file);

    setImages([
      ...images,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    form.reset();
  };

  return (
    <div className="m-4">
      <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-white md:text-5xl lg:text-6xl dark:text-white">Upload file to IPFS</h3>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" name="file" />
        </label>
        <br />
        <br />
        <br />
        <div className="flex w-full justify-center items-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" type="submit">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Upload Files
            </span>
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />

      <div>
      {images.map((image, index) => (
          <img
            key={image.cid.toString() + index}
            alt={`Uploaded #${index + 1}`}
            src={"https://skywalker.infura-ipfs.io/ipfs/" + image.path}
            style={{ maxWidth: "400px", margin: "15px" }}
          />
        ))}
      </div>
      {/* Link to view images */}
      <div>
        <Link to="/nftimages">View Images</Link>
      </div>
      <NftImage images={images} />
    </div>
  );
}

export default NftExchange;