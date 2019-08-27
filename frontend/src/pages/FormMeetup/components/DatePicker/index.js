import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import {
  endOfDay, isSameDay, parseISO,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, isOutdated }) {
  const ref = useRef(null);
  const {
    fieldName, registerField, defaultValue,
  } = useField(name);
  const minDateTime = new Date();
  const [selected, setSelected] = useState(defaultValue ? parseISO(defaultValue) : minDateTime);
  const sameDay = isSameDay(selected, minDateTime);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: (pickerRef) => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        id="date-time"
        disabled={isOutdated}
        name={fieldName}
        selected={selected}
        onChange={(date) => setSelected(date)}
        ref={ref}
        minDate={minDateTime}
        minTime={sameDay ? minDateTime : undefined}
        maxTime={sameDay ? endOfDay(minDateTime) : undefined}
        locale={ptBR}
        withPortal
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="dd/MM/yyyy - HH:mm"
        placeholderText="Data do Meetup"
        autoComplete="off"
      />
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  isOutdated: PropTypes.bool.isRequired,
};
