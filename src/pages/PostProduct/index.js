import React, { useContext } from "react";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { DropZone } from "../../components/DropZone";

import { MyContext } from "../../context/MyContext";
import { categories } from "../../services/fakeData";

import styles from "./styles.module.scss";

export function PostProduct() {
  const { category, handleCategory } = useContext(MyContext);

  return (
    <>
      <Header />
      <form
        method="post"
        className={styles.formContainer}
        enctype="multiipart/form-data"
      >
        <DropZone />

        <section className={styles.section}>
          <div className={styles.inputs}>
            <label>Nome do Produto: </label>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <label>Tipo do produto: </label>

            <select
              className={styles.category}
              value={category}
              onChange={handleCategory}
            >
              <option>---</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.category}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputs}>
            <label>Preço:</label>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <label>Whatsapp:</label>
            <input type="text" />
          </div>
        </section>

        <div className={styles.description}>
          <label for="description">Descrição do produto:</label>
          <textarea name="description"></textarea>
        </div>

        <Button text="Posta" />
      </form>
    </>
  );
}
