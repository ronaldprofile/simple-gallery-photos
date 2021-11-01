import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container, Content, GallerySlider } from "./styles";
import { IPhoto } from "../../types/Photo";
import { IMetadata } from "../../types/MetadataPhoto";

interface IModalProps {
  photo: IPhoto;
  metaDataPhoto: IMetadata | undefined;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ photo, metaDataPhoto, setIsModalActive }: IModalProps) {
  // const formatDate = Date.parse(metaDataPhoto?.timeCreated);
  // const formattedDate = new Intl.DateTimeFormat("pt-br", {
  //   year: "numeric",
  //   month: "long",
  //   day: "2-digit"
  // }).format(formatDate);

  const formatFileSize = Number(metaDataPhoto?.size) / 1024;
  const formattedFileSize = formatFileSize.toFixed() + " MB";

  return (
    <Container>
      <Content>
        <header>
          <strong className="fileName">{photo?.name}</strong>
          <IoCloseOutline
            size={32}
            title="fechar modal"
            onClick={() => setIsModalActive(false)}
          />
        </header>

        <GallerySlider>
          <div className="button">
            <IoIosArrowBack size={24} />
          </div>

          <div className="photo-modal">
            <img src={photo?.url} alt={photo?.name} />

            <div className="modal-content">
              <h2>Detalhes</h2>

              <div className="details">
                <ul key={photo.name}>
                  <li>
                    Nome do arquivo
                    <span>{metaDataPhoto?.nameFile}</span>
                  </li>
                  <li>
                    Tipo do arquivo
                    <span>{metaDataPhoto?.contentType}</span>
                  </li>
                  <li>
                    Tamanho do arquivo
                    <span>{formattedFileSize}</span>
                  </li>

                  {/* <li>
                    Criado
                    <span> {formattedDate}</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="button">
            <IoIosArrowForward size={24} />
          </div>

          <div className="buttons-mobile">
            <div className="button">
              <IoIosArrowBack size={24} />
            </div>
            <div className="button">
              <IoIosArrowForward size={24} />
            </div>
          </div>
        </GallerySlider>
      </Content>
    </Container>
  );
}
