import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { iconSize } from 'constants';
import { formatEventDuration, formatEventStart } from 'utils';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const ducation = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sn} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sn} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sn} />
        {formatedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sn} />
        {ducation}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
