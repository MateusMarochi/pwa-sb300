'use client'
import { Container, Typography, List, ListItem } from '@mui/material'

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hello World
      </Typography>
      <Typography paragraph>
        Esta é uma aplicação PWA de exemplo para o módulo SB300.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Como instalar no Android
      </Typography>
      <List>
        <ListItem>
          Abra o menu do navegador e escolha <strong>Adicionar à tela inicial</strong>.
        </ListItem>
      </List>
      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>
        Como instalar no iOS
      </Typography>
      <List>
        <ListItem>
          No Safari, toque em <strong>Compartilhar</strong> e depois em <strong>Adicionar à Tela de Início</strong>.
        </ListItem>
      </List>
    </Container>
  )
}
