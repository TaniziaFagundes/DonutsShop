import { Container, Content, Backgrounds } from "./styles";
import Img from "../../assets/amico.svg";
import SocialMidia01 from "../../assets/Group.svg";
import SocialMidia03 from "../../assets/Vector.svg";

const Footer = () => {
  return (
    <Container>
      <Backgrounds>
        <Content>
          <div>
            <img src={SocialMidia01} alt="instagram"></img>
            <img src={SocialMidia03} alt="facebook"></img>
          </div>
          <div>
            <img src={Img} alt="Donnuts"></img>
          </div>
        </Content>
        <Content>
          <p>
            @ copyright todos os direitos reservados{" "}
            <span>TaniziaFagundes</span>
          </p>
        </Content>
      </Backgrounds>
    </Container>
  );
};

export default Footer;
