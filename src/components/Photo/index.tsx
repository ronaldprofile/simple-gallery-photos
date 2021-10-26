import { IPhoto } from "../../types/Photo";
// import { Button } from "../Button";
import { Container } from "./styles";

interface IPhotosProps {
  photo: IPhoto;
  handleDeletePhoto: (name: string) => void;
}

export function Photo({ photo, handleDeletePhoto }: IPhotosProps) {
  return (
    <Container>
      <img src={photo.url} alt={photo.name} className="photo" />

      <img
        src="/src/assets/close.svg"
        alt="icon close"
        className="icon-close"
        title="Excluir foto"
        onClick={() => handleDeletePhoto(photo.name)}
      />

      {/* for mobile */}
      {/* <Button>Remover foto</Button> */}
    </Container>
  );
}
