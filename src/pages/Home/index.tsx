import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Photo } from "../../components/Photo";
import { Spinner } from "../../components/Spinner";
import { MdFileUpload } from "react-icons/md";

import { deletePhoto, getAllPhotos, sendFile } from "../../services/photos";
import { IPhoto } from "../../types/Photo";

import { Container, Grid, Warning } from "./styles";

export function Home() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    setPhotos(await getAllPhotos());
  }

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get("photo") as File;

    if (file && file.size > 0) {
      setUploading(true);
      const result = await sendFile(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
        return;
      } else {
        setPhotos([...photos, result!]);
        getPhotos();
      }
    }
  }

  async function handleDeletePhoto(name: string) {
    setUploading(true);
    await deletePhoto(name);
    setUploading(false);
    getPhotos();
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

        {uploading && <Spinner />}
      </form>

      {photos.length > 0 && (
        <Grid>
          {photos.map(photo => {
            return <Photo key={photo.url} {...{ photo, handleDeletePhoto }} />;
          })}
        </Grid>
      )}

      {!uploading && photos.length === 0 && (
        <Warning>
          <h2>Opps! Não temos nenhuma foto por aqui...</h2>
          <p>comece adicionado sua primeira foto</p>
        </Warning>
      )}
    </Container>
  );
}
