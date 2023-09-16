import { useFormik } from "formik";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import "./Form.css";
import { useState } from "react";


const Form = () => {
  
  const [successMessage, setSuccessMessage] = useState(false);

  const enviarForm = (data, { resetForm }) => {
    resetForm();
    console.log(data);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 2500);
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Debes ingresar un nombre")
        .min(5, "El nombre debe tener 5 caracteres"),
      email: Yup.string()
        .required("Debes ingresar un email")
        .email("El email debe ser valido"),
    }),
    onSubmit: enviarForm,
  });

  return (
    <div>
      <Typography color="primary" variant="h3" align="center" margin={5}>
        Contáctenos
      </Typography>
      <form action="" className="form-container" onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="column"
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item>
            <TextField
              type="text"
              label="Ingrese su nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
              error={formik.errors.nombre}
              helperText={formik.errors.nombre}
            />
          </Grid>
          <Grid item>
            <TextField
              type="email"
              label="Ingrese su email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              helperText={formik.errors.email}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          {" "}
          Enviar
        </Button>
        {successMessage && (
          <Alert severity="success">
            Gracias por contactarte, nos estaremos comunicando a la brevedad!!
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Form;
