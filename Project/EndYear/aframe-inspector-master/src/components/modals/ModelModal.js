import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export default function ModelModal (props) {
  var Events = require('../../lib/Events.js');

  const isOpen = props.isOpen;
  const [assetsModel, setAssetModel] = useState([]);

  useEffect(() => {
    generateFromAssets();
  }, [isOpen]);
  const generateFromAssets = () => {
    setAssetModel([]);
    var images = Array.prototype
      .slice.call(document.querySelectorAll('a-assets a-asset-item[src][flag=model]'));
    // console.log(images[0].getAttribute('src'))
    setAssetModel(images);
    console.log(images);
  };
  const demoItem = 0;
  const modelClick = ()=>{
    Events.emit('updateModelUploadedList', demoItem);
  };
  return (
    <Modal
      id="textureModal"
      title="Models"
      isOpen={props.isOpen}
      onClose={props.onClose}
      closeOnClickOutside={false}
    >
              <div className="newimage">
          <div className="new_asset_options">
            <span>Load a new texture from one of these sources:</span>
            <ul>
              <li>
                <span>From URL (and press Enter):</span>{' '}
                <input
                  type="text"
                  className="imageUrl"
                  // value={this.state.newUrl}
                  // onChange={this.onUrlChange}
                  // onKeyUp={this.onNewUrl}
                />
              </li>
              <li>
                <span>Tải lên </span>
                <div className="assets search">
                  <input
                    placeholder="Filter..."
                    // value={this.state.filterText}
                    // onChange={this.onChangeFilter}
                  />
                  <span className="fa fa-search"/>
                </div>
                <ul
                  // ref="registryGallery"
                  className="gallery">
                  {/*{this.renderRegistryImages()}*/}
                </ul>
              </li>
            </ul>
          </div>
          <div className="preview">
            Name:{' '}
            <input
              // ref="imageName"
              // className={
              //   this.state.preview.name.length > 0 && !validUrl ? 'error' : ''
              // }
              type="text"
              // value={this.state.preview.name}
              // onChange={this.onNameChanged}
              // onKeyUp={this.onNameKeyUp}
            />
            <img
              // ref="preview"
              width="155px"
              height="155px"
              // src={preview.src}
            />
            {/*{this.state.preview.loaded ? (*/}
            {/*  <div className="detail">*/}
            {/*      <span className="title" title={preview.filename}>*/}
            {/*        {preview.filename}*/}
            {/*      </span>*/}
            {/*    <br/>*/}
            {/*    <span>*/}
            {/*        {preview.width} x {preview.height}*/}
            {/*      </span>*/}
            {/*  </div>*/}
            {/*) : (*/}
            {/*  <span/>*/}
            {/*)}*/}
            <br/>
            {/*<button disabled={!validAsset} onClick={this.addNewAsset}>*/}
            {/*  LOAD THIS TEXTURE*/}
            {/*</button>*/}
          </div>
        </div>

    </Modal>
  );
}

ModelModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  selectedModel: PropTypes.string
};
