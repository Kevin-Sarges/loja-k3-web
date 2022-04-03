import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { Header } from "../../components/Header";

import { api } from "../../services/api";
import styles from "./styles.module.scss";
import { Modal } from "../../components/Modal";

export function Product() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { product, setProduct, modalIsOpen, openModal, closeModal } =
    useContext(AuthContext);

  async function deleteProduct() {
    try {
      await api.delete(`/products/post-product/delete/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  useEffect(() => {
    async function handleProduct() {
      try {
        const response = await api.get(`/products/${id}`);

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    handleProduct();
  }, [id, setProduct]);

  return (
    <>
      <Header />

      <main className={styles.container}>
        <img src={product.url_image_product} alt="product" />

        <div className={styles.description}>
          <h1>{product.name_product}</h1>

          <p>{product.description}</p>

          <footer>
            <div className={styles.value}>
              <h2>Valor:</h2>
              <p>{product.price}</p>
            </div>

            <button className={styles.buttonEdit} onClick={openModal}>
              Editar
            </button>
            <button className={styles.buttonDelete} onClick={deleteProduct}>
              Deletar
            </button>

            <Modal openModal={modalIsOpen} closeModal={closeModal} />
          </footer>
        </div>
      </main>
    </>
  );
}
