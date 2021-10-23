import { IPhoto } from "../../types/Photo";
import { Button } from "../Button";
import { Container } from "./styles";

interface IPhotosProps {
  photo: IPhoto;
  handleDeletePhoto: (name: string) => void;
}

export function Photo({ photo, handleDeletePhoto }: IPhotosProps) {
  return (
    <Container>
      <img src={photo.url} alt={photo.name} />

      <Button
        onClick={() => handleDeletePhoto(photo.name)}
        background="#df2e2e"
        color="#ffffff"
      >
        Remover foto
      </Button>
    </Container>
  );
}
