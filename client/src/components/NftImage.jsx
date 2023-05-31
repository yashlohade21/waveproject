import React from 'react';

const NftImage = ({ images }) => {
  try {
    if (!images || images.length === 0) {
      return <div>No images available</div>;
    }

    return (
      <div>
        {images.map((image, index) => (
          <img
            key={image.cid.toString() + index}
            alt={`Uploaded #${index + 1}`}
            src={`https://gateway.ipfs.io/ipfs/${image.cid}`}
            style={{ maxWidth: "400px", margin: "15px" }}
          />
        ))}
      </div>
      
    );
  } catch (error) {
    console.error(error);
    return <div>Error occurred while rendering images</div>;
  }
};

export default NftImage;