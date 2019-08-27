import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import api from 'services/api';
import Toast from 'services/utils/toast';
import { Container } from './styles';

export default function BannerInput({
  name, label: children, ...rest
}) {
  const { defaultValue, fieldName, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue);
  const [preview, setPreview] = useState(defaultValue && `http://localhost:3333/file/${defaultValue}`);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const formData = new FormData();
    formData.append('banner', e.target.files[0]);

    try {
      const response = await api.post('file', formData);

      const { path } = response.data;

      setFile(path);
      setPreview(`http://localhost:3333/file/${path}`);
    } catch (err) {
      const { data } = err.response;
      Toast({
        type: 'error',
        title: `Error: ${
          data.error ? data.error
            : 'Internal server error'
        }`,
      });
    }
  }

  return (
    <Container>
      <label htmlFor="banner" {...rest}>
        { preview ? (
          <img
            src={preview}
            alt="Banner of Meetup"
          />
        ) : children }

        <input
          type="file"
          name={fieldName}
          accept="image/*"
          id="banner"
          data-file={file}
          onChange={handleChange}
          ref={ref}
          {...rest}
        />
      </label>
    </Container>
  );
}

BannerInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.element.isRequired,
};

BannerInput.defaultProps = {
  banner: false,
};
