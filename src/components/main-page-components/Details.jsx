import '../../css/main-page-components/accordions.css'
import Detail from './Detail';

function Details({ accordionsData }) {

  return (
    <div className="accordions">
      {accordionsData.map(({ title, content }) => (
        <Detail title={title} content={content} key={title} />
      ))}
    </div>
  );


}
export default Details;