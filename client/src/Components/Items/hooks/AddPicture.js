import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function UploadPicture({picture, setPicture, setFormData}) {
  const [preview, setPreview] = useState(null);

  const handlePictureChange = (event) => {
    const selectedPicture = event.target.files[0];
   setPicture(selectedPicture);
   setPreview(URL.createObjectURL(selectedPicture));
  }


  return (
    <div>
      <input name="image" filename={picture} accept="image/*" type="file" onChange={handlePictureChange}/>
      {preview && (
        <img src={preview} alt="Selected file preview" style={{width: '200px', height: '200px'}}/>
      )}
      <span className='pic-icon'>
      <FontAwesomeIcon
          icon="fa-solid fa-image"
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        </span>
    </div>
  )
}