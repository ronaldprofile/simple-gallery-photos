import { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IoResize, IoCloseOutline } from "react-icons/io5";
import { getMetaDataPhoto } from "../../services/photos";
import { IMetadata } from "../../types/MetadataPhoto";
import { IPhoto } from "../../types/Photo";
import { Modal } from "../Modal";

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
  const [metaDataPhoto, setMetaDataPhoto] = useState<IMetadata | undefined>();
  const [isModalActive, setIsModalActive] = useState(false);
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

  async function handleResize(nameFile: string) {
    setIsModalActive(true);
    const result = await getMetaDataPhoto(nameFile);

    const data: IMetadata = {
      nameFile: result?.name,
      contentType: result?.contentType,
      size: result?.size,
      timeCreated: result?.timeCreated
    };

    setMetaDataPhoto(data);
  }

  dragRef(dropRef(refPhoto));
  return (
    <>
      <Container ref={refPhoto} isDragging={isDragging}>
        <header>
          <IoResize
            size={24}
            title="expandir"
            onClick={() => handleResize(photo.name)}
          />

          <IoCloseOutline
            size={24}
            title="excluir foto"
            onClick={() => handleDeletePhoto(photo.name)}
          />
        </header>

        <div className="slide">
          <img src={photo.url} alt={photo.name} className="photo" />
        </div>
      </Container>

      {isModalActive && (
        <Modal {...{ photo, metaDataPhoto, setIsModalActive }} />
      )}
    </>
  );
}
