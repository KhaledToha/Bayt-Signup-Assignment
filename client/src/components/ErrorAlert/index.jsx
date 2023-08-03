/* eslint-disable react/prop-types */
import { Snackbar, Alert, AlertTitle } from '@mui/material'
export const ErrorAlert = ({
    open,
    message,
    setOpen,
  }) => (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      sx={{ width: '40%' }}
    >
      <Alert severity="error" sx={{ width: '100%' }} variant="filled">
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );