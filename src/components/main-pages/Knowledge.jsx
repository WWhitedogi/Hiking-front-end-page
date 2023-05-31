import Titleto from "../main-page-components/Titleto";
import Accordions from "../main-page-components/Details";

function Knowledge({ knowledgeData }) {
  return (
    <div className="knowledge">
      <Titleto titleto={'Tips for hiking in different seasons'}></Titleto>
      <Accordions accordionsData={knowledgeData['accordionsData']}></Accordions>
    </div>
  )
}

export default Knowledge;
