import React, { useState } from "react";

import { Header } from "../../components/Header";

import { categories, productsFake } from "../../services/fakeData";
import styles from "./styles.module.scss";

export function Home() {
  const [category, setCategory] = useState("");

  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <header className={styles.headerContainer}>
          <h1>Produtos: </h1>

          <select
            className={styles.filter}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Filtro</option>
            {categories.map((item) => (
              <option value={item.category}>{item.category}</option>
            ))}
          </select>
        </header>

        <div className={styles.products}>
          {productsFake.map((item) => (
            <div className={styles.componentProducts}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt="Imagem" />
              </div>

              <footer>
                <h3>{item.name}</h3>

                <p>
                  Valor
                  <b className={styles.price}> {item.price}</b>
                </p>
              </footer>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
