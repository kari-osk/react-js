import React from "react";
import Hero from "../components/Hero";
import BGimage from "../assets/puppy.jpg";
import BGDog from "../assets/bulldog.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero
    title={
      <span>
        Ganhe sua <strong>Liberdade</strong>
        <br />
        para ir e vir
      </span>
    }
    image={BGimage}
  >
    <p>texto aqui</p>
  </Hero>
);

export const withList = () => (
  <>
    <Hero
      title={
        <span>
          Ganhe sua <strong>Liberdade</strong>
          <br />
          para ir e vir
        </span>
      }
      image={BGDog}
    >
      <ul>
        <li>texto</li>
        <li>texto</li>
        <li>texto</li>
      </ul>
    </Hero>
  </>
);
