'use client'
import { useEffect, useState } from 'react'
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import BluetoothIcon from '@mui/icons-material/Bluetooth'

export default function BluetoothPage() {
  const [devices, setDevices] = useState<BluetoothDevice[]>([])
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    if (!navigator.bluetooth?.getDevices) {
      setSupported(false)
      return
    }
    const load = async () => {
      try {
        const known = await navigator.bluetooth.getDevices()
        if (known) setDevices(known as BluetoothDevice[])
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  const handleSearch = async () => {
    if (!navigator.bluetooth?.requestDevice) {
      alert('Web Bluetooth n\u00e3o \u00e9 suportado neste navegador.')
      return
    }
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      })
      setDevices(prev => {
        if (!prev.find(d => d.id === device.id)) {
          return [...prev, device]
        }
        return prev
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dispositivos Bluetooth
      </Typography>
      {!supported && (
        <Typography color="error" gutterBottom>
          Seu navegador n\u00e3o suporta Web Bluetooth.
        </Typography>
      )}
      <Button
        variant="contained"
        startIcon={<BluetoothIcon />}
        onClick={handleSearch}
        disabled={!supported}
        sx={{ mb: 2 }}
      >
        Buscar dispositivo
      </Button>
      <List>
        {devices.map(device => {
          const name = device.name || 'Sem nome'
          const isSb300 = name.toUpperCase().includes('SB300')
          const connected = device.gatt?.connected && isSb300
          const color = connected ? '#0B5D2D' : isSb300 ? '#F76902' : undefined
          return (
            <ListItem key={device.id} sx={{ color }}>
              <ListItemText primary={name} secondary={device.id} />
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
