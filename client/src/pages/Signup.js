import React, {useState} from "react";
import { Input, Button, FormLabel, Flex, Heading, useToast } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
import { ADD_USER } from '../utils/mutations';
import auth from '../utils/auth';
import { useMutation } from "@apollo/client";

const Signup = () => {

    // const { register, handleSubmit, formState: {errors}} = useForm();
    const [formState, setFormState] = useState({username:'', email:'', password:''});

    const [addUser, {error}] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,[name]: value
        });
    };

    // const [data, setData] = useState();
    // const onSubmit = (data) => {
        
        
    //     setData(data);
    // };
    // console.log(data);

    const toast = useToast();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        toast({
            title: 'Submitted',
            status: 'success',
            duration: 3000,
            isClosable: true
        });
    
        // use try/catch instead of promises to handle errors
        try {
          // execute addUser mutation and pass in variable data from form
          const { data } = await addUser({
            variables: { ...formState }
          });
          console.log(data);
          
          auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <Flex 
                    height='100vh' 
                    alignItems='center' 
                    justifyContent='center'> 
                    <Flex 
                        direction='column'  
                        p={12} 
                        rounded={6}
                    > 
                        <Heading mb={6} >Signup</Heading>
                        <FormLabel> Email </FormLabel>
                            <Input 
                                type='email' 
                                placeholder='email' 
                                name='email'
                                variant='outline' 
                                mb={3} 
                                // {...register('email')} 
                                isRequired
                                onChange={handleChange}
                                value={formState.email}
                                id='email'
                            />

                        <FormLabel>Username</FormLabel>
                            <Input 
                                type='text' 
                                placeholder='username' 
                                name='username'
                                variant='outline' 
                                onChange={handleChange}
                                value={formState.username}
                                mb={3} 
                                id='username'
                                // {...register('username', {required: 'please enter a username', minLength: {value: 8, message: 'Too Short'}})} 
                                />
                            {/* {errors.username && <p>{errors.username.message}</p>} */}

                        <FormLabel>Password</FormLabel>
                            <Input 
                                type='password' 
                                placeholder='password' 
                                name='password'
                                variant='outline' 
                                onChange={handleChange}
                                value={formState.password}
                                mb={3} 
                                id='password'
                                // {...register('password', {required: 'please enter a password', minLength: {value: 8, message: 'Too Short'}})}
                            />
                            {/* {errors.password && <p>{errors.password.message}</p>} */}

                        <Button 
                            type='submit' 
                            colorScheme='yellow' 
                            variant='outline'
                        >   
                            Signup
                        </Button>
                    </Flex>
                </Flex>
            </form>
            {error && <div>Signup failed</div>}
        </div>
    )
}

export default Signup;