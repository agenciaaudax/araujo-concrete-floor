import styled from "styled-components";
import Logo from "../src/assets/images/Logo.png";
import cover from "../src/assets/images/Mainsec.png";
import brasao from "../src/assets/images/Icone.png";
import telefone from "../src/assets/images/Tele.png";
import Aboutimage from "../src/assets/images/AboutUs.png";
import GallImage1 from "../src/assets/images/Gallery/Gallery.1.png";
import GallImage2 from "../src/assets/images/Gallery/Gallery.2.png";
import GallImage3 from "../src/assets/images/Gallery/Gallery.3.png";
import GallImage4 from "../src/assets/images/Gallery/Gallery.4.png";
import GallImage5 from "../src/assets/images/Gallery/Gallery.5.png";
import GallImage6 from "../src/assets/images/Gallery/Gallery.6.png";
import GallImage7 from "../src/assets/images/Gallery/Gallery.7.png";
import GallImage8 from "../src/assets/images/Gallery/Gallery.8.png";

const Header = styled.div`
  width: 1440px;
  height: 116px;
  background: (255, 255, 255, 1);
  display: flex;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 375px;
    height: 112px;
    background-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-color: blue;
    border-width: 1px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Clickable = styled.a`
  color: #dfdad6;
  text-decoration: none;
  margin-right: 50px;
  color: rgba(7, 0, 77, 1);

  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderSymbol = styled.img`
  width: 50px;
  height: 50.13px;
  margin: 33px 120px 32.8px 50px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const ImgLogo = styled.img`
  width: 146px;
  height: 106px;
  margin: 5px 453px 5px 20px;
  @media (max-width: 700px) {
    width: 146px;
    height: 106px;
    margin: 0px 116px 6px 62.38px;
    /* The margin left is 62.38px because is the exact distance between the hamburger menu to 
    the  */
  }
`;

const MainSection = styled.div`
  height: 685px;
  width: 1440px;
  /*Chris, eu tinha colocado width: 100% aqui como voce disse e infelizmente nao cobriu a pagina como deveria.deveria. Acredito que o fator principal talvez, seja porque o body nao esta estabelecido. Entao voltei a 1440px e assim que a body for estabelecido, voltarei a testar  o 100% */

  background-image: url(${cover});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 700px) {
    height: 550px;
    width: 375px;
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
`;

const MainSuperHolder = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const MainSectionTitle = styled.h2`
  height: 72px;
  width: 387px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;

  color: rgba(255, 255, 255, 1);
  margin-top: 75px;
  margin-left: 80px;

  /* margin-right: 500px; 500 é como esta estabelecido no design porém se eu colocar no codigo, mesmo seguindo todas as medidas. Ainda espreme a proxima div. Eu coneguiria colocar até 400, mas preferi deixar sem, pois tinha a mesma estrutra sem ou com.*/

  @media (max-width: 700px) {
    width: 345px;
    height: 48px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: rgba(255, 255, 255, 1)
    align-content: center;
    margin: 10px 15px 0px 15px;
    
  }
`;

const MainGeneralHolder = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  height: 387px;
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 375px;
    height: 25px;
    margin-top: 70px;
    margin-bottom: 173px;
  }
`;

const MainSectionHolder = styled.div`
  width: 124px;
  height: 24px;
  margin-top: 84px;

  @media (max-width: 700px) {
    margin-bottom: 173px;
  }
`;

const MainSectionService = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(244, 244, 244, 1);

  @media (max-width: 700px) {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: rgba(244, 244, 244, 1);
  }
`;

const MainSectionTelephone = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: rgba(244, 244, 244, 1);

  @media (max-width: 700px) {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: rgba(255, 255, 255, 1);
  }
`;

const TeleIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 7.5px;
`;

const MainSectionText = styled.h1`
  /* width: 806px; - Para centralisar o texto tive que excluir a width. */
  height: 67px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 140%;
  text-align: center;

  color: rgba(255, 255, 255, 1);

  @media (max-width: 700px) {
    width: 345px;
    height: 72px;

    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
`;

const MainSectionButton = styled.button`
  width: 180px;
  height: 42px;
  background: #086375;
  margin: 10px 597px 136px 607px;
  color: rgba(255, 255, 255, 1);
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;

  @media (max-width: 700px) {
    margin: 15px 98px 35px 97px;
  }
`;

const AboutUs = styled.div`
  @media (max-width: 700px) {
    width: 375px;
    height: 532px;
    background-image: url(${Aboutimage});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 86px;
  }
`;

const AboutUsTitle = styled.h2`
  @media (max-width: 700px) {
    width: 90px;
    height: 24px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 1);
    margin: 0px 143px 30px 143px;
  }
`;

const AboutUsDescription = styled.p`
  @media (max-width: 700px) {
    width: 315px;
    height: 242px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    margin: 0px 30px 30px 30px;
  }
`;

const AboutUsButton = styled.button`
  @media (max-width: 700px) {
    width: 180px;
    height: 42px;
    background: rgba(8, 99, 117, 1);
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: rgba(255, 255, 255, 1);
    margin: 0px 98px 78px 98px;
  }
`;

const Gallery = styled.div`
  @media (max-width: 700px) {
    width: 375px;
    height: 2384px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const GalleryTitle = styled.h6`
  @media (max-width: 700px) {
    width: 69px;
    height: 24px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-transform: capitalize;
    color: rgba(22, 29, 111, 1);
  }
`;

const GalleryBoxImageHolder = styled.div`
  @media (max-width: 700px) {
    height: 200px;
    width: 295px;
    display: flex;
    flex-direction: column;
  }
`;

const GalleryBoxImage = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage1});
  }
`;

const GalleryBoxImage1 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage1});
  }
`;

const GalleryBoxImage2 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage2});
  }
`;

const GalleryBoxImage3 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage3});
  }
`;

const GalleryBoxImage4 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage4});
  }
`;

const GalleryBoxImage5 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage5});
  }
`;

const GalleryBoxImage6 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage6});
  }
`;

const GalleryBoxImage7 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage7});
  }
`;

const GalleryBoxImage8 = styled.div`
  @media (max-width: 700px) {
    height: 83%;
    width: 100%;
    background-image: url(${GallImage8});
  }
`;

const GalleryImageName = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    height: 20.48%;
    background-color: rgba(3, 21, 31, 1);
  }
`;

const GallImgDescription = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: rgba(255, 255, 255, 1);
  text-align: center;
`;

function App() {
  return (
    <div>
      <Header>
        <ImgLogo src={Logo}></ImgLogo>
        <MenuContainer>
          <Clickable href="#">HOME</Clickable>
          <Clickable href="#">ABOUT US</Clickable>
          <Clickable href="#">SERVICES</Clickable>
          <Clickable href="#">GALLERY</Clickable>
          <Clickable href="#">CONTACT</Clickable>
        </MenuContainer>
        <HeaderSymbol src={brasao}></HeaderSymbol>
      </Header>

      <MainSection>
        <MainSuperHolder>
          <MainSectionTitle>
            Demolition, Floor levelling, Sloped shower & Tile installation
          </MainSectionTitle>

          <MainGeneralHolder>
            <MainSectionHolder>
              <MainSectionService>Floor levelling</MainSectionService>
              <MainSectionTelephone>
                <TeleIcon src={telefone}></TeleIcon>(416) 846.1763
              </MainSectionTelephone>
            </MainSectionHolder>

            <MainSectionHolder>
              <MainSectionService>Tile Installation</MainSectionService>
              <MainSectionTelephone>
                <TeleIcon src={telefone}></TeleIcon>(657) 668.5712
              </MainSectionTelephone>
            </MainSectionHolder>
          </MainGeneralHolder>
        </MainSuperHolder>

        <MainSectionText>Our Reputation in set in concrete! </MainSectionText>

        <MainSectionButton>REQUEST A QUOTE</MainSectionButton>
      </MainSection>

      <AboutUs>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsDescription>
          Araujo Concrete Floor Inc. specializes in concrete floors - dry pack
          (cement tile) and tile. In 2000, HW Araujo was established and in July
          2011, we became incorporated as Araujo Concrete Floor Inc. After 20
          years experience, mostly in Ontario, we have grown and decided to
          expand into preparing subfloor, and professional tile installation. We
          feel that it is most beneficial to the customer having one company
          providing complete services from start to finish.
        </AboutUsDescription>

        <AboutUsButton>REQUEST A QUOTE</AboutUsButton>
      </AboutUs>
      <Gallery>
        <GalleryTitle>Gallery</GalleryTitle>
        <GalleryBoxImageHolder>
          <GalleryBoxImage1></GalleryBoxImage1>
          <GalleryImageName>
            <GallImgDescription>Shower Tile Installation</GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>

        <GalleryBoxImageHolder>
          <GalleryBoxImage2></GalleryBoxImage2>
          <GalleryImageName>
            <GallImgDescription>Fireplace</GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>

        <GalleryBoxImageHolder>
          <GalleryBoxImage3></GalleryBoxImage3>
          <GalleryImageName>
            <GallImgDescription>Washrooms</GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>

        <GalleryBoxImageHolder>
          <GalleryBoxImage4></GalleryBoxImage4>
          <GalleryImageName>
            <GallImgDescription>Backsplash</GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>

        <GalleryBoxImageHolder>
          <GalleryBoxImage5></GalleryBoxImage5>
          <GalleryImageName>
            <GallImgDescription>Tile jobs</GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>

        <GalleryBoxImageHolder>
          <GalleryBoxImage6></GalleryBoxImage6>
          <GalleryImageName>
            <GallImgDescription>Dry pack / Tile Cemente</GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>

        <GalleryBoxImageHolder>
          <GalleryBoxImage7></GalleryBoxImage7>
          <GalleryImageName>
            <GallImgDescription>The Pen Centre</GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>

        <GalleryBoxImageHolder>
          <GalleryBoxImage8></GalleryBoxImage8>
          <GalleryImageName>
            <GallImgDescription>
              Feature Wall Tile Installation
            </GallImgDescription>
          </GalleryImageName>
        </GalleryBoxImageHolder>
      </Gallery>
    </div>
  );
}

export default App;
