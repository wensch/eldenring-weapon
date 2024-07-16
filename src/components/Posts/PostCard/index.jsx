import './styles.css';

export const PostCard = ({ name, image, description, id }) => (
  <div className="post">
    <img src={image} alt={name} />
    <div className="post-content">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
);