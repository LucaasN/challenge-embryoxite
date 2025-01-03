import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddNodeFormProps {
  onAdd: (title: string) => void;
  onCancel: () => void;
}

export const AddNodeForm: React.FC<AddNodeFormProps> = ({ onAdd, onCancel }) => {
  
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={error}
        helperText={error ? 'El título no puede estar vacio' : ''}
        size="small"
        margin="dense"
        placeholder='Ingresa el título para el nuevo nodo'
      />
      <Box sx={{ mt: 1 }}>
        <Button type="submit" variant="contained" size="small" sx={{ mr: 1 }}>
          Aceptar
        </Button>
        <Button onClick={onCancel} variant="outlined" color="error" size="small">
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};

