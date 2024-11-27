import fs from "fs";

const registrar = (contenido) => {
  try {
    let citas = [];
    if (fs.existsSync("citas.json")) {
      const archivo = fs.readFileSync("citas.json", "utf-8");
      if (archivo) {
        citas = JSON.parse(archivo);
        if (!Array.isArray(citas)) {
          throw new Error("El contenido del archivo no es un array válido.");
        }
      }
    }

    citas.push(JSON.parse(contenido));
    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf-8");
    console.log("Cita registrada correctamente.");
  } catch (err) {
    console.error("Error al registrar la cita:", err.message);
  }
};

const leer = () => {
  try {
    if (!fs.existsSync("citas.json")) {
      console.log("No hay citas registradas.");
      return;
    }

    const archivo = fs.readFileSync("citas.json", "utf-8");
    const citas = JSON.parse(archivo);
    if (Array.isArray(citas) && citas.length > 0) {
      console.log("Citas registradas:");
      console.log(citas);
    } else {
      console.log("No hay citas registradas.");
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
};

export { registrar, leer };
