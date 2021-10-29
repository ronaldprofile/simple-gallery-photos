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
          <button>Copiar url</button>
          <img
            src="https://ik.imagekit.io/gczsuhmv3/avanz/Storage_Photos/close_OjqIR2f9WL.svg?updatedAt=1635428950544"
            alt="icon close"
            onClick={() => setIsModalActive(false)}
          />
        </header>
        <GallerySlider>
          <div className="btn">
            <img
              src="https://ik.imagekit.io/gczsuhmv3/avanz/Storage_Photos/arrow-next.svg?updatedAt=1635459984593"
              alt="icon previous photo"
              className="arrow"
            />
          </div>

          <div className="full-image">
            <img
              src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>

          <div className="btn">
            <img
              src="https://ik.imagekit.io/gczsuhmv3/avanz/Storage_Photos/arrow-previous.svg?updatedAt=1635459967273"
              alt="icon arrow next photo"
              className="arrow"
            />
          </div>
        </GallerySlider>
      </Content>
    </Container>
  );
}
