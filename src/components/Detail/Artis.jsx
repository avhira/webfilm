import Carousel from '../../Carousel';
import img7 from '../../img/7.png';

const data = [
  { id: 1, image: img7, title: ' Winona Ryder', date: '2017' },
  { id: 2, image: img7, title: 'David Harbour', date: '2017' },
  { id: 3, image: img7, title: 'Millie Boby Brown', date: '2018' },
  { id: 1, image: img7, title: ' Winona Ryder', date: '2017' },
  { id: 2, image: img7, title: 'David Harbour', date: '2017' },
  { id: 3, image: img7, title: 'Millie Boby Brown', date: '2018' },
  { id: 1, image: img7, title: ' Winona Ryder', date: '2017' },
  { id: 2, image: img7, title: 'David Harbour', date: '2017' },
  { id: 3, image: img7, title: 'Millie Boby Brown', date: '2018' },
  { id: 1, image: img7, title: ' Winona Ryder', date: '2017' },
  { id: 2, image: img7, title: 'David Harbour', date: '2017' },
  { id: 3, image: img7, title: 'Millie Boby Brown', date: '2018' },
  { id: 1, image: img7, title: ' Winona Ryder', date: '2017' },
  { id: 2, image: img7, title: 'David Harbour', date: '2017' },
  { id: 3, image: img7, title: 'Millie Boby Brown', date: '2018' },
];

export default function Artis() {
  return (
    <>
      <Carousel data={data} />
    </>
  );
}
