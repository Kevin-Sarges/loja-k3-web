import React, { useContext } from "react";

import { AuthContext } from "../../context/auth";
import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

export function Product() {
  const { product } = useContext(AuthContext);

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

            <button>Deletar</button>
          </footer>
        </div>
      </main>
    </>
  );
}
