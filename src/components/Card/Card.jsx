const Card = ({
  name,
  url,
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  info,
}) => {
  return (
    <div className="hero">
      <h1 className="hero__name">{name}</h1>
      <img className="hero__pic" src={url} alt={name} />
      <div className="hero__text">Вселенная: {universe}</div>
      <div className="hero__text">Альтерэго: {alterego}</div>
      <div className="hero__text">Род деятельности: {occupation}</div>
      <div className="hero__text">Союзники: {friends}</div>
      <div className="hero__text">Способности: {superpowers}</div>
      <div className="hero__text">{info}</div>
    </div>
  );
};

export default Card;
