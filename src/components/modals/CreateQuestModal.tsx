import React from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useToast,
} from '@chakra-ui/react';
import { questAPI } from '../../services/QuestService';
import { Field, Form, Formik } from 'formik';
import { IQuest } from '../../models/IQuest';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

interface MyFormValues {
    title: string;
    description: string;
}

export const CreateQuestModal = ({ isOpen, onClose }: Props) => {
    const [createPost] = questAPI.useCreateQuestMutation();

    const toast = useToast();

    const handleCreate = (values: MyFormValues) => {
        console.log(values);
        createPost(values as IQuest)
            .unwrap()
            .then(payload => {
                toast({
                    title: `${payload?.title} создан`,
                    status: 'success',
                    isClosable: true,
                });
            });
    };

    const initialValues: MyFormValues = { title: '', description: '' };

    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            handleCreate(values);
                            actions.setSubmitting(false);
                            onClose();
                        }}
                    >
                        {props => (
                            <Form>
                                <ModalHeader>Создать квест</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <Field name="title">
                                        {({ field, form }: any) => (
                                            <FormControl isRequired>
                                                <FormLabel>Наименование</FormLabel>
                                                <Input {...field} placeholder="Наименование" />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="description">
                                        {({ field, form }: any) => (
                                            <FormControl mt={4}>
                                                <FormLabel>Описание</FormLabel>
                                                <Textarea {...field} placeholder="Описание" />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="rewards">
                                        {({ field, form }: any) => (
                                            <FormControl isRequired>
                                                <FormLabel>Награда</FormLabel>
                                                <Input {...field} placeholder="Награда" />
                                            </FormControl>
                                        )}
                                    </Field>
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme="blue" mr={3} type="submit" isLoading={props.isSubmitting}>
                                        Создать
                                    </Button>
                                    <Button onClick={onClose}>Закрыть</Button>
                                </ModalFooter>
                            </Form>
                        )}
                    </Formik>
                </ModalContent>
            </Modal>
        </>
    );
};
