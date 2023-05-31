import '../css/main.css'

import Home from './main-pages/Home';
import MainData from './data/MainData';
import Knowledge from './main-pages/Knowledge';
import EventPage from './main-pages/EventPage';
import Join from './main-pages/Join';

function Main({ page }) {
  console.log(MainData['Events']['Hiking']);
  return (
    <main>
      {page === 'home' && <Home data={MainData['Home']}></Home>}
      {page === 'knowledge' && <Knowledge knowledgeData={MainData['Knowledge']}></Knowledge>}

      {page === 'Hiking' && <EventPage eventPageData={MainData['Events']['Hiking']} useCards={true} usePanels={false}></EventPage>}

          {page === 'Hometown_Mountain' && <EventPage eventPageData={MainData['Events']['Hometown_Mountain']} useCards={false} usePanels={true}></EventPage>}
      {page === 'join' && <Join></Join>}
    </main>
  )
}

export default Main;