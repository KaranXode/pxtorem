// src/ImageGenerator.js
import React, { useState, useRef,useEffect } from 'react';
import axios from 'axios';
// import './ImageGenerator.css'; // Import CSS file

const ImageGenerator = () => {
  const [images, setImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [imageSize, setImageSize] = useState('small');
  const imagesPerPage = 100;


  const buttonRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 1000); 
    return () => clearTimeout(timeoutId);
  }, []);


  const handleImageGeneration = async (text) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images',
        {
          prompt: text,
          model: 'image-alpha-001',
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      setImages((prevImages) => [...prevImages, response.data.url]);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const generateRandomImages = async () => {
    try {
      const responses = await Promise.all(
        Array.from({ length: 100 }).map(() => axios.get(`https://picsum.photos/800/400?random=${Date.now()}`))
      );

      const newRandomImages = responses.map((response) => response.request.responseURL);
      setRandomImages(newRandomImages);
      setImages((prevImages) => [...prevImages, newRandomImages]);
      
    } catch (error) {
      console.error('Error generating random images:', error);
    }
    finally {
      setIsLoading(false);
    }
  };
  const toggleImageSize = () => {
    setImageSize((prevSize) => (prevSize === 'small' ? 'large' : 'small'));
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevNext = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      paginate(currentPage - 1);
    } else if (direction === 'next' && images.length > currentPage * imagesPerPage) {
      paginate(currentPage + 1);
    }
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentRandomImages = randomImages.slice(indexOfFirstImage, indexOfLastImage);
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div className="image-generator-wrapper text-center">
      <h3 className='mb-2 p-4'>Random AI Image Generator</h3>
      <div className="button-container">
        <button ref={buttonRef} onClick={generateRandomImages} className='btn btn-sm btn-warning'>Generate 100 Random Images</button>
      </div>
      <h6 className='text-end px-3 small'> Total Images : - {currentRandomImages.length}</h6>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
      <div className="image-row">
        
        {currentRandomImages.map((randomImage, index) => (
          <>
          <div key={index} onDoubleClick={toggleImageSize} >
          <img key={index} src={randomImage} alt={`Randomly Generated ${index + 1}`} className="image-preview" style={{ width: imageSize === 'small' ? '100%' : '320px', cursor: 'pointer' }} />
          
          </div>
          </>
        ))}

      </div>
      )}
      {/* <div className="image-row">
        {currentImages.map((image, index) => (
          <img key={index} src={image} alt={`Generated ${index + 1}`} className="image-preview" />
        ))}
      </div> */}
      {/* <div className="pagination">
        <button onClick={() => handlePrevNext('prev')} >
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={() => handlePrevNext('next')} >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default ImageGenerator;
