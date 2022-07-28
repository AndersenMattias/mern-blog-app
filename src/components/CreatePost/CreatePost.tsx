import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

// Utils for this component
import { selectOptions } from './util';

// api calls frontend
import { POST } from 'Api/api';
//components
import AlertMessage from 'components/AlertMessage/AlertMessage';
import Button from 'components/Button/Button';

// interfaces
import { IFormInputs, IPost } from 'interfaces/post';

import { GoBook } from 'react-icons/go';
import { GrFormAdd } from 'react-icons/gr';

const CreatePost = (): JSX.Element => {
  const [input, setInput] = useState<IFormInputs>({
    title: '',
    bodyText: '',
    image: '',
    author: '',
    createdAt: new Date(),
    categories: [],
  });

  const [toggleUpload, setUpload] = useState<boolean>(false);

  const [dateValue, setDateValue] = useState(new Date());
  const [postImage, setPostImage] = useState<string | any>({
    name: '',
    myFile: '',
  });
  const [selectCategories, setSelectCategories] = useState<any>([]);
  const [urlImg, setUrlImg] = useState();

  // State for handling error on form
  const [displayAuthErr, setDisplayAuthErr] = useState<boolean>(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState('');
  const [checkTerm, setCheckTerm] = useState<boolean>(false);

  useEffect(() => {
    const { title, bodyText, image, author, createdAt, categories } = input;
    if (
      title.length > 3 &&
      bodyText.length > 5 &&
      image != null &&
      author.length > 3 &&
      createdAt != null &&
      categories.length > 1
    ) {
      setDisplayAuthErr(false);
      setDisplayErrorMessage('');
    } else if (
      title.length > 3 ||
      bodyText.length > 5 ||
      image != null ||
      author.length > 3 ||
      createdAt != null ||
      categories.length > 1
    ) {
      setDisplayAuthErr(false);
      setDisplayErrorMessage('');
    }
  }, [
    input.title,
    input.bodyText,
    input.image,
    input.author,
    input.createdAt,
    input.categories,
  ]);

  const onToggleCheck = () => setCheckTerm(!checkTerm);
  const onToggleUpload = () => setUpload(!toggleUpload);

  // Upload file function
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files![0].name;
    const file = e.target.files![0];
    setPostImage({ ...postImage, myFile: file, name: fileName });
  };

  // handle input fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  // on submit form
  const onFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    console.log('form');
    e.preventDefault();
    console.log(selectCategories);
    console.log(postImage.myFile);
    if (!input.title || !input.bodyText || !input.author) {
      console.log('i if sats');
      setDisplayAuthErr(true);
      console.log('i if sats');
      setDisplayErrorMessage('Please fill in all of the fields.');
    } else if (input.title.length < 2) {
      console.log('else if sats 1');
      setDisplayErrorMessage('Title field must be longer than two characters');
      setDisplayAuthErr(true);
    } else if (input.bodyText.length < 5) {
      console.log('else if sats 2');
      setDisplayErrorMessage('Please write some more about your post.');
      setDisplayAuthErr(true);
    } else if (input.author.length < 2) {
      setDisplayErrorMessage(
        'Author field must be longer than two characters.'
      );
      setDisplayAuthErr(true);
    }

    // else if all good create new post!
    else if (input.title && input.bodyText && input.author && !displayAuthErr) {
      console.log('ALLT OK!');
      const newPost: IPost = {
        title: input.title,
        bodyText: input.bodyText,
        image: urlImg,
        author: input.author,
        createdAt: dateValue,
        categories: selectCategories,
      };

      console.log(newPost);

      const res = await POST.createPost(newPost)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          setDisplayAuthErr(true);
          console.log(e);
          setDisplayErrorMessage('Something went wrong, try again!');
        });
    }
  };

  // handle multiple select values
  const onHandleMultiple = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newArr = [...selectCategories]; // copying the old datas array
    newArr.push(e.target.value);
    console.log(newArr);
    setSelectCategories(newArr);

    /*

    setSelectCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    */
  };

  // Upload image and return URL from S3
  const onUploadImg = async (e: React.MouseEvent) => {
    e.preventDefault();

    const { url } = await POST.getUrl().then((res) => res.json());

    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: postImage.myFile,
    });
    const imageUrl = url.split('?')[0];
    setUrlImg(imageUrl);
  };

  return (
    <div>
      <div>
        <GoBook />
      </div>
      <h5>Create Post</h5>
      <form>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={input.title}
          onChange={handleInputChange}
        />
        <input
          type=''
          name='bodyText'
          placeholder='Bodytext'
          multiple
          style={{ width: 500 }}
          value={input.bodyText}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='author'
          placeholder='Author'
          value={input.author}
          onChange={handleInputChange}
        />
        <DatePicker
          selected={dateValue}
          onChange={(date: Date) => setDateValue(date)}
        />
        <Select
          isMulti
          placeholder='Select categories'
          defaultValue={selectCategories}
          onChange={setSelectCategories}
          options={selectOptions}
        />
        <br />
        <br />
        <input type='file' onChange={handleFileUpload} />
        <p>Choosen file: {postImage.name}</p>
        <br />
        <Button type='submit' onClick={onUploadImg} colour='btn--primary'>
          Upload
        </Button>
        <div>
          <img src={urlImg} alt='' width={200} height={200} />
        </div>
        <br />
        <input
          type='checkbox'
          onChange={onToggleCheck}
          placeholder={`I'm not a robot.`}
        />
        <Button
          type='submit'
          colour='btn--primary'
          text='Create post'
          onClick={onFormSubmit}
        />
      </form>

      {displayAuthErr && (
        <AlertMessage heading='Warning' text={displayErrorMessage} />
      )}
    </div>
  );
};

export default CreatePost;
