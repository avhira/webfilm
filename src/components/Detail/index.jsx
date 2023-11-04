import { useParams } from 'react-router-dom';
import { Star } from 'react-feather';
import img from '../../img/detail-img.png';
import bgHome from '../../img/bg-home.png';
import FilmSerupa from './FilmSerupa';
import Artis from './Artis';
import imgVid from '../../img/video-img.png';

export default function Detail() {
  const { id } = useParams();
  const data = {
    1: {
      image: img,
      genre: 'Adventure - Action - History',
      title: 'Indiana Jones and The Dial of Destiny',
      rate: '16+',
      scord: '9.0',
      date: '2023',
      time: '2j 35m',
      description:
        'Menemukan dirinya berada di era baru, dan mendekati masa pensiun, Indy bergulat dengan dunia yang tampaknya sudah melampaui batasnya. Namun saat tentakel kejahatan yang sangat familiar kembali dalam wujud rival lamanya, Indy harus mengenakan topinya dan mengambil cambuknya sekali lagi untuk memastikan artefak kuno dan kuat tidak jatuh ke tangan yang salah.',
      artis: 'Winona Ryder, David Harbour, Millie Boby Brown',
    },
  };
  const item = data[id];

  const content = item ? (
    <>
      <div className="content detail">
        <div>
          <img src={item.image} alt={item.title} />
        </div>
        <div>
          <p>{item.genre}</p>
          <h1>{item.title}</h1>
          <div className="rate">{item.rate}</div>
          <div className="scor">
            <Star className="star" /> {item.scord} {item.date} | {item.time}
          </div>
          <p>{item.description}</p>
          <div className="artis">
            <span>Dibintangi:</span> {item.artis}
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>Item not found</h1>
  );
  const screenWidth = window.innerWidth;

  return (
    <>
      <section id="detail" className="detail" style={{ backgroundImage: screenWidth > 578 ? `url(${bgHome})` : '', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {content}
      </section>

      <div className="container detail-top" style={{ display: 'grid', gap: '3rem' }}>
        <div>
          <div className="typeFilm-title">
            <h1>Plot</h1>
          </div>
          <div className="film-wrapper">
            <p style={{ lineHeight: '2rem' }}>{item.description}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="typeFilm-title">
            <h1>Videos</h1>
          </div>
          <div className="film-wrapper">
            <img src={imgVid} alt="video" width="90%" />
          </div>
        </div>
      </div>
      <FilmSerupa />
      <Artis />
    </>
  );
}
