import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  
} from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const [dentist, setDentist] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => setDentist(res.data));
  }, []);

  return (
    <>
      <Typography color="primary" variant="h4" align="center" margin={5}>
        Detalle del Profesional
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Telefono</TableCell>
              <TableCell align="center">Web</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              key={dentist.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {dentist.name}
              </TableCell>
              <TableCell align="center">{dentist.email}</TableCell>
              <TableCell align="center">{dentist.phone}</TableCell>
              <TableCell align="center">{dentist.website}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={2} margin={5}>
      <Link to={`/dentists`}>
      <Button variant="contained" endIcon={<SendIcon />}>
      Atras
      </Button></Link>
    </Stack>
   

    </>
  );
};

export default Detail;
