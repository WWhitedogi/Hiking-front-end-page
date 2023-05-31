function Texts({ texts }) {
  return (
    <div className="texts">
      {texts.map(
        item => {
          return (<p key={item}>{item}</p>);
        }
      )}
    </div>
  );
}

export default Texts;