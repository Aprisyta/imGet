import React, { Component } from 'react';
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'
// import image-icon from 'react-icons/lib/fa/file-image-o'

class UploadImage extends Component {

  state = {
    numberOfPitureAdded: 0,
  }

  upload = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true })
    values.faceURL.map((img, key) => {
      localStorage.setItem(key, img)
    })
  }

  render() {
    const { numberOfPitureAdded } = this.state;
    const defaultNumberOfPictures = 6;
    let imageInputArr = []
    for(let i = 0; i < defaultNumberOfPictures; i++) {
      imageInputArr.push(
        <ul key={i}>
          <ImageInput
            className="image-upload"
            name="faceURL"
            maxHeight={100}
          />
      </ul>
      )
    }
    return (
      <div>
        <h2>Upload images of your face.</h2>
        <form onSubmit={this.upload}>
          <div className="image-grid">{imageInputArr}</div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UploadImage;
