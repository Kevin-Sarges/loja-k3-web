import React, { useContext, useState } from "react";

import { Header } from "../../components/Header";

import { MyContext } from "../../context/MyContext";
import { categories, productsFake } from "../../services/fakeData";

import styles from "./styles.module.scss";

export function Home() {
  const { category } = useContext(MyContext);
  let [categorySelected, setCategorySelected] = useState([]);

  function filterCategory(e) {
    const value = e.target.value;
    categorySelected = productsFake.filter((item) => item.category === value);

    if (categorySelected.length <= 0) {
      return alert("Não a produtos dessa categoria !!");
    } else {
      setCategorySelected(categorySelected);
    }
  }

  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <header className={styles.headerContainer}>
          <h1>Produtos:</h1>

          <select
            className={styles.filter}
            value={category}
            onClick={filterCategory}
          >
            <option>Filtro</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.category}
              </option>
            ))}
          </select>
        </header>

        <div className={styles.products}>
          {categorySelected.length > 0
            ? categorySelected.map((item) => (
                <div key={item.id} className={styles.componentProducts}>
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
              ))
            : productsFake.map((item) => (
                <div key={item.id} className={styles.componentProducts}>
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
