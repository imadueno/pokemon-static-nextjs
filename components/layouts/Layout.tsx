import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "@ui";

/**
 * NOTA:
 * FC debería resolver automaticamente el prop children, cosa que no hace
 * por eso se está declarando en la interfaz
 */
interface Props {
  children: ReactNode;
  title?: string;
}

/**
 * Se puede pasar Props dentro de FC<Generic> o bien como tipado
 *  de los parametros del funcional component las dos funcionan igual
 */
// export const Layout: FC<Props> = ({ title, children }) => {
// export const Layout = ({ title, children }: Props) => {

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Isaí Madueño" />
        <meta
          name="description"
          content={`Información sobre el pokémon, ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 12px",
        }}
      >
        {children}
      </main>
    </>
  );
};
