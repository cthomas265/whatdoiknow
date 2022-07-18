import { TextInput, Button, Group, Box, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState} from 'react';

const Contact = () => {
    
    const [value, setValue] = useState(''); 
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },
    
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    
    return (
        <Box sx={{ maxWidth: 700 }} mx="auto" >
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />

                <TextInput
                    required
                    label="Name"
                    placeholder="Full Name Here"
                    {...form.getInputProps('name')}
                />
                
                <Textarea value={value} onChange={(event) => setValue(event.currentTarget.value)}              
                    placeholder="Please type your message here"
                    label="Your message"
                    required
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>

            <div class="col">
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/cthomas265">GitHub: cthomas265</a>
            </div>
            <div class="col">
                <i class="fa-solid fa-mobile"></i>
                <a href="tel:9208675309">Phone: (920)867-5309</a>
            </div>
            <div class="col">
                <i class="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/carrie-thomas-69203a187/">LinkedIn: Carrie Thomas</a>
            </div>
            <div class="col">
                <i class="fa-solid fa-paper-plane"></i>
                <a href="mailto:cmthomas289@gmail.com">Email: cmthomas289@gmail.com</a>
            </div>
        </Box>
        
        
    );
};

export default Contact;