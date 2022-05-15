import React, { useEffect, useState, useRef } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InewPost } from 'interfaces/interfaces';

// Utils for this component
import { MenuProps, options, getStyles } from './util';

// access Mui Icons
import * as Icon from '@mui/icons-material';

import axios from 'axios';

// Material UI
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
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

import Copyright from 'components/Copyright/Copyright';
import MUIButton from 'components/MUIButton/MUIButton';
import { POST } from 'Api/api';

const FCWidth = {
  width: '20rem',
};

const postSchema = yup.object({
  title: yup.string().required(),
  bodyText: yup.string().required(),
  image: yup.string().required(),
  author: yup.string().required(),
  createdAt: yup.string().required(),
  categories: yup.array().required(),
});

interface IFormInputs {
  title: string;
  bodyText: string;
  image: File | string;
  author: string;
  createdAt: Date | string;
  categories: string[];
}

const CreatePost = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(postSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    const formData = new FormData();
    formData.append('image', data.image[0]);

    const res = await POST.createPost(data).then((res) => res.json());
    console.log(JSON.stringify(res));
  };

  const theme = createTheme();

  console.log('errors are', errors);

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
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Controller
              name='title'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Title'
                  variant='outlined'
                  error={!!errors.title}
                  helperText={errors.title ? 'This field is required.' : ''}
                  fullWidth
                  margin='dense'
                />
              )}
            />

            <Controller
              name='bodyText'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Bodytext'
                  variant='outlined'
                  error={!!errors.bodyText}
                  helperText={errors.bodyText ? 'This field is required.' : ''}
                  fullWidth
                  margin='dense'
                  multiline
                  rows={8}
                />
              )}
            />

            <Controller
              name='author'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Author'
                  variant='outlined'
                  error={!!errors.author}
                  helperText={errors.author ? 'This field is required.' : ''}
                  fullWidth
                  margin='dense'
                />
              )}
            />
            <Controller
              name='createdAt'
              control={control}
              defaultValue={new Date().toISOString().substring(0, 10)}
              render={({ field }) => (
                <TextField
                  {...field}
                  type='date'
                  variant='outlined'
                  error={!!errors.createdAt}
                  helperText={errors.createdAt ? 'This field is required.' : ''}
                  fullWidth
                  margin='dense'
                />
              )}
            />

            <Controller
              name='categories'
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <FormControl sx={FCWidth}>
                  <InputLabel id='category'>Categories</InputLabel>
                  <Select
                    {...field}
                    labelId='category'
                    label='category'
                    multiple
                    defaultValue={[]}
                  >
                    {options.map((option: any, index) => (
                      <MenuItem value={option.value} key={index}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />

            <br />

            <Controller
              name='image'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Button variant='contained' component='label' color='primary'>
                  {' '}
                  <Icon.Add /> Upload an image.
                  <TextField
                    {...field}
                    type='file'
                    variant='outlined'
                    error={!!errors.createdAt}
                    helperText={
                      errors.createdAt ? 'This field is required.' : ''
                    }
                    fullWidth
                    margin='dense'
                    hidden
                  />
                </Button>
              )}
            />
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
