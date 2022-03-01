import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { iconSize } from 'constants';

import { formatEventDuration, formatEventStart } from 'utils';

import css from './Event.module.css';
export const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const ducation = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sn} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sn} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sn} />
        {formatedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sn} />
        {ducation}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
