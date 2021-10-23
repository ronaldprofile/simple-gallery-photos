import { storage } from "./firebase";
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject
} from "firebase/storage";

import { v4 as createRandomIdentifier } from "uuid";
import { IPhoto } from "../types/Photo";

export async function getAllPhotos() {
  let Photos: IPhoto[] = [];

  const refFolderImages = ref(storage, "images");
  const listPhotos = await listAll(refFolderImages);

  for (let photo in listPhotos.items) {
    const photoUrl = await getDownloadURL(listPhotos.items[photo]);

    Photos.push({
      name: listPhotos.items[photo].name,
      url: photoUrl
    });
  }

  return Photos;
}

export async function sendFile(file: File) {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    const identifierFile = createRandomIdentifier();

    const newFile = ref(storage, `images/${identifierFile}`);
    const upload = await uploadBytes(newFile, file);

    const photoUrl = await getDownloadURL(upload.ref);
    return { name: upload.ref.name, url: photoUrl } as IPhoto;
  } else {
    return new Error("Tipo de arquivo não suportado");
  }
}

export async function deletePhoto(name: string) {
  const photoRef = ref(storage, `images/${name}`);

  await deleteObject(photoRef);
}
