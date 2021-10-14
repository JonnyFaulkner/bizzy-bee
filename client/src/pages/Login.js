import React, {useState} from "react";
import { Input, Button, Flex, Heading, useToast, FormLabel } from "@chakra-ui/react"
// import { useForm } from "react-hook-form";
import { LOGIN_USER } from "../utils/mutations";
import auth from "../utils/auth";
import { useMutation } from "@apollo/client";

const Login = () => {

    const [formState, setFormState] = useState({ email:'', password:''});

    const [login, {error}] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,[name]: value
        });
    };

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
          const { data } = await login({
            variables: { ...formState }
          });
          console.log(data);
          
          auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
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
                    <Heading mb={6} >Login</Heading>
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
                        Login
                    </Button>
                </Flex>
            </Flex>
        </form>
        {error && <div>Login failed</div>}
    </div>
)
}

export default Login;