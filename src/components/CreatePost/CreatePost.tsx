import React, { useState } from 'react';

import * as Icon from '@mui/icons-material';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MultiSelect } from 'react-multi-select-component';

import Copyright from 'components/Copyright/Copyright';
import MUIButton from 'components/MUIButton/MUIButton';

const options = [
  { label: 'Tech ', value: 'Tech' },
  { label: `Fitness`, value: 'Fitness' },
  { label: `Music `, value: 'Music' },
  { label: `Food `, value: 'Food' },
  { label: `Sport`, value: 'Sport' },
];

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

const CreatePost = (): JSX.Element => {
  const [categories, setCategories] = useState([]);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Icon.MenuBook />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Create Post
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              name='Title'
              label='Title'
              type='text'
              id='Title'
              autoFocus
            />
            <TextField
              multiline
              rows={8}
              maxRows={10}
              margin='normal'
              required
              fullWidth
              name='bodyText'
              label='Bodytext'
              type='text'
              id='bodyText'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='Author'
              label='Author'
              type='text'
              id='Author'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='Date'
              type='date'
              id='Date'
              value={new Date().toISOString().substring(0, 10)}
              autoFocus
            />

            <FormControl fullWidth>
              <MultiSelect
                options={options}
                value={categories}
                onChange={setCategories}
                labelledBy='Select'
              />
            </FormControl>

            <FormControl>
              <Button variant='contained' component='label' color='primary'>
                {' '}
                <Icon.Add /> Upload an image.
                <input type='file' hidden />
              </Button>
            </FormControl>

            <br />

            <FormControl>
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label={`I'm not a robot.`}
              />
            </FormControl>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreatePost;
