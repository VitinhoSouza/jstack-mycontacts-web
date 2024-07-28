import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

import { Container } from "./styles";

export default function ToastMessage({ message, onRemoveMessage, isLeaving, animatedRef }) {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 5000);

    // Para o setTimeout não executar caso a gente clique no Container e
    // o componente já tenha saido da tela
    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role='button'
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt='X' />}
      {message.type === 'success' && <img src={checkCircleIcon} alt='Check' />}
      <strong>{message.text}</strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape({}).isRequired,
}