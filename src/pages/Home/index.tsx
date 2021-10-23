import { FormEvent, useEffect, useState } from "react";
import { Photo } from "../../components/Photo";

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
      } else {
        setPhotos([...photos, result!]);
        getPhotos();
      }
    }
  }

  async function handleDeletePhoto(name: string) {
    await deletePhoto(name);
    getPhotos();
  }

  return (
    <Container>
      <h1>Gallery photos</h1>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="photo">
            <input type="file" id="photo" name="photo" />
            Escolher foto
          </label>

          <button>Enviar</button>
        </div>

        {uploading && (
          <div className="result">
            <span>Enviando foto...</span>
            <div className="animation-loading"></div>
          </div>
        )}
      </form>

      {photos.length > 0 && (
        <Grid>
          {photos.map(photo => {
            return <Photo key={photo.url} {...{ photo, handleDeletePhoto }} />;
          })}
        </Grid>
      )}

      {photos.length === 0 && (
        <Warning>
          <h2>Opps! Não temos nenhuma foto por aqui...</h2>
          <p>comece adicionado sua primeira foto</p>
        </Warning>
      )}
    </Container>
  );
}
