import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { DropZone } from "../../components/DropZone";

import { MyContext } from "../../context/MyContext";
import { categories } from "../../services/fakeData";

import api from "../../services/api";
import styles from "./styles.module.scss";

export function PostProduct() {
  const navigete = useNavigate();
  const { category } = useContext(MyContext);

  const [selectImage, setSelectImage] = useState();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    whatsapp: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, type, price, whatsapp, description } = formData;

    const data = new FormData();

    data.append("name", name);
    data.append("type", type);
    data.append("price", price);
    data.append("whatsapp", whatsapp);
    data.append("description", description);
    data.append("image", selectImage);

    api
      .post("/products/post-product", data)
      .then(() => {
        navigete("/home");
      })
      .catch((error) => {
        console.log(error);
        alert("erro ao salvar!!");
      });
  }

  return (
    <>
      <Header />
      <form
        method="post"
        enctype="multiipart/form-data"
        onSubmit={handleSubmit}
        className={styles.formContainer}
      >
        <DropZone onFileUploaded={setSelectImage} />

        <section className={styles.section}>
          <div className={styles.inputs}>
            <label for="name">Nome do Produto: </label>
            <input type="text" name="name" onChange={handleChange} />
          </div>

          <div className={styles.inputs}>
            <label for="type">Tipo do produto: </label>

            <select
              className={styles.category}
              value={category}
              onChange={handleChange}
              name="type"
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
            <label for="price">Preço:</label>
            <input type="text" name="price" onChange={handleChange} />
          </div>

          <div className={styles.inputs}>
            <label for="whatsapp">Whatsapp:</label>
            <input type="text" name="whatsapp" onChange={handleChange} />
          </div>
        </section>

        <div className={styles.description}>
          <label for="description">Descrição do produto:</label>
          <textarea name="description" onChange={handleChange}></textarea>
        </div>

        <Button text="Posta" />
      </form>
    </>
  );
}
