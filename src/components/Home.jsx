import { Eye, Star } from 'react-feather';
import bgHome from '../img/bg-home.png';
import TypeFilm from './TypeFilm';
import Genre from './Genre';

export default function Home() {
  return (
    <>
      <section id="home" className="home" style={{ backgroundImage: `url(${bgHome})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="content">
          <p>Adventure - Action - History</p>
          <h1>Indiana Jones and The Dial of Destiny</h1>
          <div className="rate">16+</div>
          <div className="scor">
            <Star className="star" /> 9.0 2023 | 2j 35m
          </div>
          <p>
            Menemukan dirinya berada di era baru, dan mendekati masa pensiun, Indy bergulat dengan dunia yang tampaknya sudah melampaui batasnya. Namun saat tentakel kejahatan yang sangat familiar kembali dalam wujud rival lamanya, Indy
            harus mengenakan topinya dan mengambil cambuknya sekali lagi untuk memastikan artefak kuno dan kuat tidak jatuh ke tangan yang salah.
          </p>
          <div className="artis">
            <span>Dibintangi:</span> Winona Ryder, David Harbour, Millie Boby Brown
          </div>
          <button>
            <Eye /> Lihat Film
          </button>
        </div>
      </section>
      <TypeFilm />
      <Genre />
    </>
  );
}
