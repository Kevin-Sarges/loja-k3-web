import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.scss";

export function DropZone({ onFileUploaded }) {
  const [image, setImage] = useState();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setImage(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className={styles.dropZoneComponent} {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {image ? (
        <div className={styles.image}>
          <img src={image} alt="Imagem" />
        </div>
      ) : (
        <p className={styles.text}>
          <FaPlus size={30} />
          Selecione uma imagem
        </p>
      )}
    </div>
  );
}
