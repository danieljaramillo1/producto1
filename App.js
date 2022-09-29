import React, { useEffect, useState } from "react";
//importo las clases que voy a usar en la interfaz
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  //hook
  const [data, setData] = React.useState({});
  const [hidden, setHidden] = React.useState(true);
  // [{x}, {x}, {}] array de objts
  // []array
  // {} objt
  // ctrl + alt + flecha abjo
  //ctrl shift + flech derecha para seleccionar palabras en masa
  // ctrl + D seleccionas palabras identicas

  useEffect(() => {
    console.log(data);
    console.log("useeffect");
  }, [data]);

  //estilo de placeholder
  const generalsStyle = {
    color: "black",
    borderWidth: 1,
    padding: 3,
    textAlign: "center",
    marginTop: 12,
  };
  //Se crea un array con inputs
  const inps = [
    {
      placeholder: "ingrese_id",
      styles: {
        color: "black",
        borderWidth: 1,
        padding: 3,
        textAlign: "center",
        marginTop: 18,
      },
    },
    { placeholder: "nombre", styles: generalsStyle },
    { placeholder: "asignatura", styles: generalsStyle },
    { placeholder: "ingresa_nota_1", styles: generalsStyle },
    { placeholder: "ingresa_nota_2", styles: generalsStyle },
    { placeholder: "ingresa_nota_3", styles: generalsStyle },
    { placeholder: "definitiva", styles: generalsStyle },
    { placeholder: "observación", styles: generalsStyle },
  ];
  //inps.forEach((x) => console.log(x.placeholder));
  // se crear un array con Strings para el label
  const lbls = [
    "Identificación:",
    "Nombre:",
    "Asignatura:",
    "Nota momento 1:",
    "Nota momento 2:",
    "Nota momento 3:",
    "Definitiva:",
    "Observacion:",
  ];
  // estilo de boton.
  const btnstyles = [
    {
      backgroundColor: "black",
      borderRadius: 5,
      width: 100,
      height: 20,
      margin: 3,
    },
  ];
  // se crea un array de botones
  const btns = [
    { text: "calcular", styles: btnstyles, action: calcular, hidden },
    { text: "limpiar", styles: btnstyles, action: limpiar, hidden },
    { text: "buscar", styles: btnstyles, action: buscar, hidden },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "powderblue",
          marginTop: 50,
          width: "85%",
          alignItems: "center",
        }}
      >
        <Text>Sistema de notas</Text>
      </View>
      {/* asi se comenta */}
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View>
          {lbls.map((word) => {
            //console.log("hola");
            return (
              <Text key={word} style={{ marginTop: 20 }}>
                {word}
              </Text>
            );
          })}
        </View>

        <View>
          {inps.map((obj) => (
            <TextInput
              key={obj.placeholder}
              placeholder={obj.placeholder}
              style={obj.styles}
              onChange={(e) => {
                setData({ ...data, [obj.placeholder]: e.nativeEvent.text });
                  if(data.ingrese_id)
                ;
              }}
            ></TextInput>
          ))}
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {btns.map((item) => (
          <TouchableOpacity
            key={item.text}
            style={item.styles}
            onPress={item.action}
            disabled={item.hidden}
          >
            <Text
              style={{ color: "white", fontSize: "10", fontWeight: "bold" }}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

function calcular() {
  console.log("calcular");
}
function validar() {

}

function limpiar() {
  console.log("limpiar");
}

function buscar() {
  console.log("buscar");
}
