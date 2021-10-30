import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container, Content, GallerySlider } from "./styles";

interface IModalProps {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ setIsModalActive }: IModalProps) {
  return (
    <Container>
      <Content>
        <header>
          <strong className="fileName">screenshot.3829329.png</strong>
          <IoCloseOutline
            size={32}
            title="fechar modal"
            onClick={() => setIsModalActive(false)}
          />
        </header>

        <GallerySlider>
          <div className="button">
            <IoIosArrowBack size={24} />
          </div>

          <img
            src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />

          <div className="button">
            <IoIosArrowForward size={24} />
          </div>
        </GallerySlider>
      </Content>
    </Container>
  );
}
