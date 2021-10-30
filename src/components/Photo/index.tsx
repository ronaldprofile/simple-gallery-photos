import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IoResize, IoCloseOutline } from "react-icons/io5";
import { IPhoto } from "../../types/Photo";

import { Container } from "./styles";
interface IPhotosProps {
  photo: IPhoto;
  indexPhoto: number;
  handleDeletePhoto: (name: string) => void;
  moveListItem: (from: number, to: number) => void;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IItemDraggedProps {
  id: string;
  indexPhoto: number;
}

export function Photo({
  photo,
  indexPhoto,
  handleDeletePhoto,
  moveListItem,
  setIsModalActive
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
      <header>
        <IoResize
          size={24}
          title="expandir"
          onClick={() => setIsModalActive(true)}
        />

        <IoCloseOutline
          size={24}
          title="excluir foto"
          onClick={() => handleDeletePhoto(photo.name)}
        />
      </header>

      <img src={photo.url} alt={photo.name} className="photo" />
    </Container>
  );
}
