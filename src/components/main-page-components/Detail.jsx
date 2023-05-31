import { useState } from 'react';

function Detail({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
        {content.map(item => { return (<p key={item}>{item}</p>); })}
      </div>}
    </div>
  );
};


export default Detail;