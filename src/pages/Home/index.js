import React, { useContext } from "react";

import { Header } from "../../components/Header";

import { AuthContext } from "../../context/auth";
import { categories } from "../../services/fakeData";

import styles from "./styles.module.scss";

export function Home() {
  const {
    product,
    category,
    categorySelected,
    filterCategory,
    handleCategory,
  } = useContext(AuthContext);

  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <header className={styles.headerContainer}>
          <h1>Produtos:</h1>

          <select
            className={styles.filter}
            value={category}
            onChange={handleCategory}
            onClick={filterCategory}
          >
            <option>Filtro</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.category__product}
              </option>
            ))}
          </select>
        </header>

        <div className={styles.products}>
          {categorySelected.length > 0
            ? categorySelected.map((item) => (
                <div key={item.id} className={styles.componentProducts}>
                  <div className={styles.imageContainer}>
                    <img src={item.url_image_product} alt="Imagem" />
                  </div>

                  <footer>
                    <h3>{item.name_product}</h3>

                    <p>
                      Valor
                      <b className={styles.price}> {item.price}</b>
                    </p>
                  </footer>
                </div>
              ))
            : product.map((item) => (
                <div key={item.id} className={styles.componentProducts}>
                  <div className={styles.imageContainer}>
                    <img src={item.url_image_product} alt="Imagem" />
                  </div>

                  <footer>
                    <h3>{item.name_product}</h3>

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
