import { IPhoto } from "../../types/Photo";
import { Container } from "./styles";

interface IPhotosProps {
  photo: IPhoto;
  handleDeletePhoto: (name: string) => void;
}

export function Photo({ photo, handleDeletePhoto }: IPhotosProps) {
  return (
    <Container>
      <img src={photo.url} alt={photo.name} />
      <button onClick={() => handleDeletePhoto(photo.name)}>
        Remover foto
      </button>
    </Container>
  );
}
