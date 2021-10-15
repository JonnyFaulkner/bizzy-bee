import React, {useState} from "react";
// import Image from 'next/image';
import {Input} from "@chakra-ui/react"
import { ADD_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
// import {FcLock} from 'react-icon/fc';

import {
  Button,
  Text,
  Stack
} from '@chakra-ui/react';


const PostForm = () => {
// export default function BlogPostWithImage() {
  const [formText, setText] = useState('');
  
  const [ addPost, {error}] = useMutation(ADD_POST, {
    update(cache, {data: {addPost}}) {
      try {
        const {posts} = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts]}
        });
      } catch (e) {
        console.error(e);
      }

      const {me} = cache.readQuery({query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: {...me, posts: [...me.posts, addPost]}}
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length) {
      setText(event.target.value);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addPost({
        variables: {formText}
      });
      setText('');
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <form onSubmit={handleFormSubmit}>
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold" color="brand.300" >Post Bulletin:</Text>
        {/* <FcLock /> */}
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Input 
          type='text' 
          value={formText} 
          onChange={handleChange} 
        />
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button colorScheme="green">POST</Button>
        </Stack>
      </Stack>
    </Stack>
    </form>
  );
}

export default PostForm;