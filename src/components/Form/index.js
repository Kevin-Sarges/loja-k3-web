import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { DropZone } from "../../components/DropZone";

import { AuthContext } from "../../context/auth";
import { categories } from "../../services/categoryProducts";

// import { api } from "../../services/api";
import styles from "./styles.module.scss";

export function Form(props) {
  const { category, handleCategory, setSelectImage, handleChangeForm } =
    useContext(AuthContext);

  return (
    <form
      method="post"
      encType="multiipart/form-data"
      onSubmit={props.submit}
      className={styles.formContainer}
      {...props}
    >
      <DropZone onFileUploaded={setSelectImage} />

      <section className={styles.section}>
        <div className={styles.inputs}>
          <label htmlFor="name">Nome do Produto: </label>
          <input type="text" name="name" onChange={handleChangeForm} required />
        </div>

        <div className={styles.inputs}>
          <label htmlFor="type">Tipo do produto: </label>

          <select
            className={styles.category}
            value={category}
            onChange={handleCategory}
            name="type"
          >
            <option>---</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.category__product}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputs}>
          <label htmlFor="price">Preço:</label>
          <input
            type="text"
            name="price"
            onChange={handleChangeForm}
            required
          />
        </div>

        <div className={styles.inputs}>
          <label htmlFor="whatsapp">Whatsapp:</label>
          <input
            type="text"
            name="whatsapp"
            onChange={handleChangeForm}
            required
          />
        </div>
      </section>

      <div className={styles.description}>
        <label htmlFor="description">Descrição do produto:</label>
        <textarea
          name="description"
          onChange={handleChangeForm}
          required
        ></textarea>
      </div>

      <Button text="Posta" />
    </form>
  );
}
