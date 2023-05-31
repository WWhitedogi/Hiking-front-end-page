import { useState } from 'react';
import '../../css/main-page-components/panels.css'

function Panels({ panelsData }) {

  return (
    <div className="panels">
      {panelsData.map(
        ({ panelTitle, imgSrc, text }) => {
          return (
            <div className='panel' key={imgSrc}>
              {/* <div className='panel__img__container'> */}
              <img src={imgSrc} alt="beautiful mountain" />
              {/* </div> */}
              <div className='subtile-and-text'>
                <h3>{panelTitle}</h3>
                {text.map(
                  item => { return (<p key={item}>{item}</p>); }
                )}
              </div>
            </div>
          );
        }
      )}

    </div>
  )
}

export default Panels;