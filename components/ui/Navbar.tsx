import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        // se debe agregar la URL al next config ya que no es posible
        // agregar la url a los Image de next, cuando trabajamos con
        // static generation
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />

      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        ókemon
      </Text>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
};
