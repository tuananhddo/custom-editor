import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default function ModelWidget (props) {

  const initValue = props.value || '';
  const [chosenValue, setChosenValue] = useState({label: 1, value: initValue});
  const options = [1, 2, 3, initValue].map(i => {
    return {label: i, value: i};
  });

  const onChange = value => {
    setChosenValue(value);
    if (props.onChange) {
      props.onChange(this.props.name, value.value);
    }
  };
  return (
    <Select
      className="select-widget"
      classNamePrefix="select"
      options={options}
      simpleValue
      clearable={true}
      placeholder=""
      value={chosenValue}
      noResultsText="No value found"
      onChange={onChange}
      searchable={true}
    />
  );
}

ModelWidget.propTypes = {
  componentname: PropTypes.string.isRequired,
  entity: PropTypes.object,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
};
