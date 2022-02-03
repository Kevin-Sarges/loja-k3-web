import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { DropZone } from "../../components/DropZone";

import { AuthContext } from "../../context/auth";
import { categories } from "../../services/categoryProducts";

import { api } from "../../services/api";
import styles from "./styles.module.scss";

export function PostProduct() {
  const navigete = useNavigate();
  const { category, handleCategory } = useContext(AuthContext);

  const [selectImage, setSelectImage] = useState();
  const [formData, setFormData] = useState({
    name: "",
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

    const { name, price, whatsapp, description } = formData;

    const data = new FormData();

    data.append("name_product", name);
    data.append("category__product", category);
    data.append("price", price);
    data.append("whatsapp", whatsapp);
    data.append("description", description);
    data.append("url_image_product", selectImage);

    api
      .post("/products/post-product", data)
      .then(() => {
        navigete("/");
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
        encType="multiipart/form-data"
        onSubmit={handleSubmit}
        className={styles.formContainer}
      >
        <DropZone onFileUploaded={setSelectImage} />

        <section className={styles.section}>
          <div className={styles.inputs}>
            <label htmlFor="name">Nome do Produto: </label>
            <input type="text" name="name" onChange={handleChange} required />
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
            <input type="text" name="price" onChange={handleChange} required />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="whatsapp">Whatsapp:</label>
            <input
              type="text"
              name="whatsapp"
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <div className={styles.description}>
          <label htmlFor="description">Descrição do produto:</label>
          <textarea
            name="description"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <Button text="Posta" />
      </form>
    </>
  );
}
