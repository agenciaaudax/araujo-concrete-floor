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
import Col1image01 from "../src/assets/images/Partnership/Column1/Column1image1.png";
import Col1image02 from "../src/assets/images/Partnership/Column1/Column1image2.png";
import Col1image03 from "../src/assets/images/Partnership/Column1/Column1image3.png";
import Col1image04 from "../src/assets/images/Partnership/Column1/Column1image4.png";
import Col1image05 from "../src/assets/images/Partnership/Column1/Column1image5.png";
import Col2image01 from "../src/assets/images/Partnership/Column2/Column2image1.png";
import Col2image02 from "../src/assets/images/Partnership/Column2/Column2image2.png";
import Col2image03 from "../src/assets/images/Partnership/Column2/Column2image3.png";
import Col2image04 from "../src/assets/images/Partnership/Column2/Column2image4.png";
import Col2image05 from "../src/assets/images/Partnership/Column2/Column2image5.png";
import Col3image01 from "../src/assets/images/Partnership/Column3/Column3image1.png";
import Col3image02 from "../src/assets/images/Partnership/Column3/Column3image2.png";
import Col3image03 from "../src/assets/images/Partnership/Column3/Column3image3.png";
import Col3image04 from "../src/assets/images/Partnership/Column3/Column3image4.png";
import Col4image01 from "../src/assets/images/Partnership/Column4/Column4image1.png";
import Col4image02 from "../src/assets/images/Partnership/Column4/Column4image2.png";
import Col4image03 from "../src/assets/images/Partnership/Column4/Column4image3.png";

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

const OtherPojects = styled.div`
  @media (max-width: 700px) {
    height: auto;
    width: 375px;
    margin-bottom: 60px;
  }
`;

const OtherProjTitle = styled.h6`
  @media (max-width: 700px) {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-transform: capitalize;
    color: rgba(22, 29, 111, 1);
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

const OtherPojectsHolder = styled.div`
  @media (max-width: 700px) {
    height: 95.28%;
    width: 89.87%;
    display: flex;
    flex-direction: column;
  }
`;

const OtherProjBoxTitle = styled.h6`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  align-items: center;
  color: rgba(22, 29, 111, 1);
`;

const OtherProjBoxParagraph = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  align-items: center;
  color: rgba(72, 72, 72, 1);
`;

const Partnership = styled.div`
  @media (max-width: 700px) {
    height: 300px;
    width: 374px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

const PartnershipTitle = styled.h6`
  @media (max-width: 700px) {
    height: 24px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-transform: capitalize;
    color: rgba(22, 29, 111, 1);
    margin-bottom: 23px;
    text-align: center;
  }
`;

const PartnershipHolder = styled.div`
  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 74.33%;
  }
`;

const PartnershipColumn1 = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 29.68%;
  }
`;

const Column1image1 = styled.div`
  @media (max-width: 700px) {
    height: 9.87%;
    width: 60.36%;
    background-image: url(${Col1image01});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column1image2 = styled.div`
  @media (max-width: 700px) {
    height: 7.62%;
    width: 100%;
    background-image: url(${Col1image02});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column1image3 = styled.div`
  @media (max-width: 700px) {
    height: 9.42%;
    width: 63.96%;
    background-image: url(${Col1image03});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column1image4 = styled.div`
  @media (max-width: 700px) {
    height: 12.11%;
    width: 27.03%;
    background-image: url(${Col1image04});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column1image5 = styled.div`
  @media (max-width: 700px) {
    height: 11.66%;
    width: 46.85%;
    background-image: url(${Col1image05});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const PartnershipColumn2 = styled.div`
  @media (max-width: 700px) {
    height: 100%;
    width: 24.87%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
const Column2image1 = styled.div`
  @media (max-width: 700px) {
    height: 8.52%;
    width: 86.02%;
    background-image: url(${Col2image01});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column2image2 = styled.div`
  @media (max-width: 700px) {
    height: 8.52%;
    width: 83.87%;
    background-image: url(${Col2image02});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column2image3 = styled.div`
  @media (max-width: 700px) {
    height: 7.17%;
    width: 96.77%;
    background-image: url(${Col2image03});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column2image4 = styled.div`
  @media (max-width: 700px) {
    height: 13%;
    width: 75.27%;
    background-image: url(${Col2image04});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column2image5 = styled.div`
  @media (max-width: 700px) {
    height: 13.45%;
    width: 68.82%;
    background-image: url(${Col2image05});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const PartnershipColumn3 = styled.div`
  @media (max-width: 700px) {
    height: 100%;
    width: 32.35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const Column3image1 = styled.div`
  @media (max-width: 700px) {
    height: 17.49%;
    width: 32.23%;
    background-image: url(${Col3image01});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column3image2 = styled.div`
  @media (max-width: 700px) {
    height: 13.9%;
    width: 31.4%;
    background-image: url(${Col3image02});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column3image3 = styled.div`
  @media (max-width: 700px) {
    height: 13.45%;
    width: 39.67%;
    background-image: url(${Col3image03});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const Column3image4 = styled.div`
  @media (max-width: 700px) {
    height: 14.8%;
    width: 49.59%;
    background-image: url(${Col3image04});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const PartnershipColumn4 = styled.div`
  @media (max-width: 700px) {
    height: 100%;
    width: 12.83%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const Column4image1 = styled.div`
  @media (max-width: 700px) {
    height: 14.8%;
    width: 68.75%;
    background-image: url(${Col4image01});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const Column4image2 = styled.div`
  @media (max-width: 700px) {
    height: 14.35%;
    width: 83.33%;
    background-image: url(${Col4image02});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Column4image3 = styled.div`
  @media (max-width: 700px) {
    height: 17.94%;
    width: 100%;
    background-image: url(${Col4image03});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
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

      <OtherPojects>
        <OtherProjTitle>Other Projects</OtherProjTitle>
        <OtherPojectsHolder>
          <OtherProjBoxTitle>Toronto</OtherProjBoxTitle>
          <OtherProjBoxParagraph>
            Nike Store at Yorkdale Mall
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Apple Store at Yorkdale Mall
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Ripley Aquarium</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Louis Vuitton at Bay & Bloor
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Bank of Montreal (MBO) at Yong & Dundas
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            CIBC Branch at Dundas & University
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Metro at Jane St & HW 7</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Metro at Yonge & Sheppard
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Several Medical Offices</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Several Starbucks Stores
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Several McDonalds’s Stores
          </OtherProjBoxParagraph>

          <OtherProjBoxTitle>Kingston</OtherProjBoxTitle>
          <OtherProjBoxParagraph>Royal Milk Canada</OtherProjBoxParagraph>

          <OtherProjBoxTitle>GUELPH</OtherProjBoxTitle>
          <OtherProjBoxParagraph>
            Gay Lea Foods Co-operative Ltd.
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Nissan dealership</OtherProjBoxParagraph>

          <OtherProjBoxTitle>HALIFAX</OtherProjBoxTitle>
          <OtherProjBoxParagraph>Royal Milk Canada</OtherProjBoxParagraph>

          <OtherProjBoxTitle>NIAGARA FALLS</OtherProjBoxTitle>
          <OtherProjBoxParagraph>
            Journey Behind the Falls
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Table Rock House Restaurant
          </OtherProjBoxParagraph>

          <OtherProjBoxTitle>LONDON</OtherProjBoxTitle>
          <OtherProjBoxParagraph>
            OPP Southwestern Ontario Provincial
          </OtherProjBoxParagraph>

          <OtherProjBoxTitle>BRAMPTON</OtherProjBoxTitle>
          <OtherProjBoxParagraph>City Hall</OtherProjBoxParagraph>

          <OtherProjBoxTitle>HAMILTON</OtherProjBoxTitle>
          <OtherProjBoxParagraph>Dofasco</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Mondalez Canada</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Mound Hamilton Cemetery</OtherProjBoxParagraph>

          <OtherProjBoxTitle>MISSISSAUGA</OtherProjBoxTitle>
          <OtherProjBoxParagraph>Dofasco</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Mondalez Canada</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Mound Hamilton Cemetery</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            OPP Southwestern Ontario Provincial
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Apple Store at Square One
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Canon Headquarters</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Several Stores at Pearson International Airport
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Square One Shopping Centre
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>Water Treatment Plant</OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Terminal 1 Gate at Pearson International
          </OtherProjBoxParagraph>
          <OtherProjBoxParagraph>
            Fire Station at Eglinton W & Hurontario
          </OtherProjBoxParagraph>
          <OtherProjBoxTitle>WATERLOO</OtherProjBoxTitle>
          <OtherProjBoxParagraph>
            Blackberry Technology Park
          </OtherProjBoxParagraph>
        </OtherPojectsHolder>
      </OtherPojects>
      <Partnership>
        <PartnershipTitle>Our Partnerships</PartnershipTitle>
        <PartnershipHolder>
          <PartnershipColumn1>
            <Column1image1></Column1image1>
            <Column1image2></Column1image2>
            <Column1image3></Column1image3>
            <Column1image4></Column1image4>
            <Column1image5></Column1image5>
          </PartnershipColumn1>
          <PartnershipColumn2>
            <Column2image1></Column2image1>
            <Column2image2></Column2image2>
            <Column2image3></Column2image3>
            <Column2image4></Column2image4>
            <Column2image5></Column2image5>
          </PartnershipColumn2>
          <PartnershipColumn3>
            <Column3image1></Column3image1>
            <Column3image2></Column3image2>
            <Column3image3></Column3image3>
            <Column3image4></Column3image4>
          </PartnershipColumn3>
          <PartnershipColumn4>
            <Column4image1></Column4image1>
            <Column4image2></Column4image2>
            <Column4image3></Column4image3>
          </PartnershipColumn4>
        </PartnershipHolder>
      </Partnership>
    </div>
  );
}

export default App;
