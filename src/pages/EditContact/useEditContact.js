import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ContactsService from "../../services/ContactsService";
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";
import toast from "../../utils/toast";

export default function useEditContact() {

  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id, controller.signal);
        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contactData);
          setContactName(contactData.name);
          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        safeAsyncAction(() => {
          navigate('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        })
      }
    }

    loadContact();

    return () => {
      controller.abort();
    }
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const updatedContactData = await ContactsService.updateContact(id, contact);

      setContactName(updatedContactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit
  }

}