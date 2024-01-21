import p from 'prop-types';
import './style.css';

export const Button = ({ children, onClickButton }) => {
  return (
    <button className="button" onClick={onClickButton}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: p.node.isRequired,
  onClickButton: p.func.isRequired,
};
