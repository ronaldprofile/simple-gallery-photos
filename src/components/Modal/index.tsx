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
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/react-firestore-306e9.appspot.com/o/images%2Fc086a8b0-1aea-4d32-b31a-c344fe90aff3?alt=media&token=76b38bee-cc25-42fb-bcca-5cfb9c761be9"
            alt=""
          /> */}
        </GallerySlider>
      </Content>
    </Container>
  );
}
