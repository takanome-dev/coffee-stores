const Skeleton = () => (
  <div className="cardList">
    {Array.from(Array(10).keys()).map((n) => (
      <div className="skeleton-card" key={n}>
        <div className="card-img skeleton" />
        <div className="card-title skeleton" />
        <div className="card-subTitle skeleton" />
      </div>
    ))}
  </div>
);

export default Skeleton;
