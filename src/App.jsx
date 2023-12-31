import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./componentes/Galeria";
import fotos from './fotos.json'
import ModalZoom from './componentes/ModalZoom'
import { useState } from "react";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;



function App() {

  const [fotosGaleria, setFotosGaleria] =  useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const AoAlternarFav = (foto) =>{
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
  setFotosGaleria(fotosGaleria.map(fotoGaleria => {
    return{
      ...fotoGaleria,
      favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
    }
  }))
}

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={bannerBackground} />
            <Galeria 
            AoAlternarFav={AoAlternarFav}
            aoFotoSelecionada={foto=> setFotoSelecionada(foto)}
            fotos={fotosGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} AoAlternarFav={AoAlternarFav}/>
    </FundoGradiente>
  );
}

export default App;
