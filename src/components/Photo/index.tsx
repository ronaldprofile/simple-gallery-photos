import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IPhoto } from "../../types/Photo";
// import { Button } from "../Button";
import { Container } from "./styles";

interface IPhotosProps {
  photo: IPhoto;
  indexPhoto: number;
  handleDeletePhoto: (name: string) => void;
  moveListItem: (from: number, to: number) => void;
}
interface IItemDraggedProps {
  id: string;
  indexPhoto: number;
}

export function Photo({
  photo,
  indexPhoto,
  handleDeletePhoto,
  moveListItem
}: IPhotosProps) {
  const refPhoto = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { name: photo.name, indexPhoto },

    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: IItemDraggedProps, monitor) {
      const draggedIndex = item.indexPhoto;
      const targetIndex = indexPhoto;

      if (draggedIndex === targetIndex) {
        return;
      }

      moveListItem(draggedIndex, targetIndex);
      item.indexPhoto = targetIndex;
    }
  });

  dragRef(dropRef(refPhoto));
  return (
    <Container ref={refPhoto} isDragging={isDragging}>
      <img src={photo.url} alt={photo.name} className="photo" />

      <img
        src="https://ik.imagekit.io/gczsuhmv3/avanz/Storage_Photos/close_OjqIR2f9WL.svg?updatedAt=1635428950544"
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
