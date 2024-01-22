import './styles/Button.scss';

export const Button = () => {
  return (
    <button className="btn">
      <div className="btn-bg"></div>

      <span className="btn-text-out">Discover more of our work</span>
      <span className="btn-text-in">Discover more of our work</span>
    </button>
  );
};
