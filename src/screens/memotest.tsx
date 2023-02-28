import { useState } from 'react';
import '/src/index.css';
import { useEffect } from 'react';

const IMAGES = ['/img/atletico.png', '/img/barca.png', '/img/betis.png', '/img/bilbao.png', '/img/sevilla.png', '/img/villareal.png', '/img/real.png', '/img/getafe.jpg', '/img/RealSociedad.png', '/img/zaragoza.png']
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0] === selected[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
      }
  }, [selected]);

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))',
        textAlign: 'center',
        gap: 24,
      }}
    >
      {IMAGES.map((image) => {
        const [, url] = image.split('|');

        return (
          <main
            key={url}
            style={{cursor: 'pointer', padding: 4, border: '1px solid #666', width: '100%', borderRadius: 12,}}
            onClick={() => setSelected((selected) => selected.concat(image))}
          >
            {selected.includes(image) || guessed.includes(image) ? (
              <img src={url} alt="icon" />
            ) : (
              <img alt="buscar" src="/img/copa.png" />
            )}
            
          </main>
        );
      })}
    </ul>
  );
}



