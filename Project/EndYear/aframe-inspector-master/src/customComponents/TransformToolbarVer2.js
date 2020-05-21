import React, {useEffect, useState} from 'react';
import ModelAPI from '../API/ModelAPI';
import Modal from '../components/modals/Modal';

var Events = require('../lib/Events.js');

const TransformButtons = [
  {value: 'translate', icon: 'fa-arrows-alt'},
  {value: 'rotate', icon: 'fa-repeat'},
  {value: 'scale', icon: 'fa-expand'}
];
const openDialog = () => {
  Events.emit('openModelModal', '', item => {
  });
};
const FunctionButtons = [
  {value: 'Upload', icon: 'fa-arrows-alt', onClick: openDialog}
];

export default function TransformToolbarVer2 (props) {
  const [selectedTransform, setSelectedTransform] = useState('translate');
  var classNames = require('classnames');

  useEffect(() => {
    Events.on('transformmodechange', mode => {
      setSelectedTransform(mode);
    });
  }, []);
  const renderTransformButtons = () => {
    return TransformButtons.map(
      (option, i) => {
        var selected = option.value === selectedTransform;
        var classes = classNames({
          button: true,
          fa: true,
          [option.icon]: true,
          active: selected
        });

        return (
          <a
            title={option.value}
            value={option.value}
            key={i}
            onClick={() => changeTransformMode(option.value)}
            className={classes}
          />
        );
      }
    );
  };
  const renderFunctionButtons = () => {
    return FunctionButtons.map(
      (option, i) => {
        var selected = option.value === selectedTransform;
        var classes = classNames({
          button: true,
          fa: true,
          [option.icon]: true,
          active: selected
        });

        return (
          <a
            title={option.value}
            value={option.value}
            key={i}
            onClick={option.onClick}
            className={classes}
          />
        );
      }
    );
  };
  const changeTransformMode = mode => {
    setSelectedTransform(mode);
    Events.emit('transformmodechange', mode);
    ga('send', 'event', 'Toolbar', 'selectHelper', mode);
  };
  document.onmousedown = (e) => {
    console.log(e);
  };

  function onFileChange (e) {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append(
      'model',
      e.target.files[0]
    );
    // if (confirm('Bạn muốn tải model lên ?') === true) {
    //   ModelAPI.uploadModel(formData);
    // }
    ModelAPI.uploadModel(formData);

  }

  return (
    <div id="transformToolbar" className="toolbarButtons">
      {renderTransformButtons()}
      {renderFunctionButtons()}
    </div>
  );
}
