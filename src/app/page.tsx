'use client'
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  IconButton,
} from '@mui/material'
import BluetoothIcon from '@mui/icons-material/Bluetooth'

export default function Home() {
  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(45deg, #F76902 0%, #0B5D2D 50%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Hello World
          </Typography>
          <Typography variant="h6" component="p">
            Esta é uma aplicação PWA de exemplo para o módulo SB300.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Como instalar no Android
        </Typography>
        <List>
          <ListItem>
            Abra o menu do navegador e escolha{' '}
            <strong>Adicionar à tela inicial</strong>.
          </ListItem>
        </List>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>
          Como instalar no iOS
        </Typography>
        <List>
          <ListItem>
            No Safari, toque em <strong>Compartilhar</strong> e depois em{' '}
            <strong>Adicionar à Tela de Início</strong>.
          </ListItem>
        </List>
      </Container>
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Conectar ao SB300
        </Typography>
        <Typography gutterBottom>
          Toque no ícone abaixo para buscar dispositivos Bluetooth.
        </Typography>
        <IconButton href="/bluetooth" color="primary" sx={{ fontSize: 48 }}>
          <BluetoothIcon fontSize="inherit" />
        </IconButton>
      </Container>
    </>
  )
}
