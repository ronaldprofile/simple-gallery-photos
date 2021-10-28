import { FormEvent, useEffect, useState } from "react";
import produce from "immer";
import { Button } from "../../components/Button";
import { Photo } from "../../components/Photo";
import { Spinner } from "../../components/Spinner";
import { MdFileUpload } from "react-icons/md";

import { deletePhoto, getAllPhotos, sendFile } from "../../services/photos";
import { IPhoto } from "../../types/Photo";

import { Container, Grid, Warning } from "./styles";

export function Home() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [animationLoadingIsActive, setAnimationLoadingIsActive] =
    useState(false);

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    setAnimationLoadingIsActive(true);
    setPhotos(await getAllPhotos());
    setAnimationLoadingIsActive(false);
  }

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get("photo") as File;

    if (file && file.size > 0) {
      setAnimationLoadingIsActive(true);
      const result = await sendFile(file);
      setAnimationLoadingIsActive(false);

      if (result instanceof Error) {
        alert(`${result.message}`);
        return;
      }

      setPhotos([...photos, result!]);
      getPhotos();
    }
  }

  async function handleDeletePhoto(name: string) {
    setAnimationLoadingIsActive(true);
    await deletePhoto(name);
    setAnimationLoadingIsActive(false);
    getPhotos();
  }

  function moveListItem(from: number, to: number) {
    setPhotos(
      produce(photos, draft => {
        const dragged = draft[from];

        draft.splice(from, 1);
        draft.splice(to, 0, dragged);
      })
    );
  }

  return (
    <Container>
      <h1>Minhas fotos</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="photo">
            <input type="file" id="photo" name="photo" />
            Escolher foto
          </label>

          <Button background="#8257e5" color="#ffffff">
            <MdFileUpload size={24} />
            Enviar
          </Button>
        </div>

        {animationLoadingIsActive && <Spinner />}
      </form>

      {photos.length > 0 && (
        <Grid>
          {photos.map((photo, index) => {
            return (
              <Photo
                key={photo.name}
                indexPhoto={index}
                {...{ photo, handleDeletePhoto, moveListItem }}
              />
            );
          })}
        </Grid>
      )}
      {!animationLoadingIsActive && photos.length === 0 && (
        <Warning>
          <h2>Opps! Não temos nenhuma foto por aqui...</h2>
          <p>comece adicionado sua primeira foto</p>
        </Warning>
      )}
    </Container>
  );
}
