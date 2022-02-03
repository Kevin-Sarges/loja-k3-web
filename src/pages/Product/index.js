import React from "react";

import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

export function Product() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <img
          src="https://loja-rk-backend.herokuapp.com/files/1643890288447-609741010camisa01.png"
          alt=""
        />

        <div className={styles.description}>
          <h1>Nome produto</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <footer>
            <div className={styles.value}>
              <h2>Valor:</h2>
              <p>R$ 20,00</p>
            </div>

            <button>Deletar</button>
          </footer>
        </div>
      </main>
    </>
  );
}
