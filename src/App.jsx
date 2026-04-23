import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/Formulario de Evento";
import { Tema } from "./componentes/Tema";
import { useState } from "react";

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const [eventos, setEventos] = useState([
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem1.png",
    tema: temas[0],
    data: new Date("2025-09-26"),
    titulo: "Mulheres no Front",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem2.png",
    tema: temas[0],
    data: new Date("2025-10-15"),
    titulo: "Pixel & Code",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem3.png",
    tema: temas[1],
    data: new Date("2025-10-20"),
    titulo: "Back-End Masters",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem4.png",
    tema: temas[1],
    data: new Date("2025-11-03"),
    titulo: "Código do Coração",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem5.png",
    tema: temas[1],
    data: new Date("2025-11-12"),
    titulo: "Server Side Summit",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem6.png",
    tema: temas[2],
    data: new Date("2025-11-25"),
    titulo: "DevOps Evolution",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem7.png",
    tema: temas[3],
    data: new Date("2025-12-02"),
    titulo: "Deep Learning Days",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem8.png",
    tema: temas[3],
    data: new Date("2025-12-09"),
    titulo: "IA na palma da mão",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem9.png",
    tema: temas[3],
    data: new Date("2025-12-15"),
    titulo: "IA segura e acessível",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem10.png",
    tema: temas[4],
    data: new Date("2026-01-10"),
    titulo: "Data Pulse",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem11.png",
    tema: temas[4],
    data: new Date("2026-01-18"),
    titulo: "Data Revolution",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem12.png",
    tema: temas[4],
    data: new Date("2026-01-26"),
    titulo: "Driven by Data",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem13.png",
    tema: temas[4],
    data: new Date("2026-02-03"),
    titulo: "SQL Summit",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem14.png",
    tema: temas[5],
    data: new Date("2026-02-15"),
    titulo: "SkyTech Summit",
  },
  {
    capa: "https://raw.githubusercontent.com/yazancan/tecboard-react/refs/heads/main/public/imagens-cards/imagem15.png",
    tema: temas[5],
    data: new Date("2026-02-22"),
    titulo: "Mundo Cloud",
  },
]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

    <section className="container">
      {temas.map(function (tema) {
        if (!eventos.some(function(evento) {
          return evento.tema.id == tema.id
        })) {
          return null
        }
        return (
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
              {eventos.filter(function(evento) {
                return evento.tema.id == tema.id
              })
              .map(function (evento, index) {
              return <CardEvento evento={evento} key={index} />;
            })}
            </div>
          </section>
        );
      })}
    </section>
      
    </main>
  );
}

export default App;
