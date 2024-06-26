import { useCallback, useState } from "react";

const auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);

  const inputList = [
    {
      type: "text",
      placeholder: "Enter your name",
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      type: "email",
      placeholder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      remarks: "Enter a valid email address",
      condition: () => {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) { 
          //checking whether the email starting with a alpha numeric characters and followed by @ , with subdomain of any length and ending with a domain of maximum 4 characters
          return true;
        }
      },
    },
  ];
  //using callback to check if there is any change in the field
  const validateForm = useCallback(() => {
    return inputList.every(
      (ele) => ele.value.length > 0 && (ele?.remarks ? ele.condition() : true)
    );
  }, [email, name]);

  const submitForm = (e) => {
    e.preventDefault();
    try {
      console.log('Email:',email,', Name:',name)
      setSubmitted(true);
    } catch (err) {
    } 
  };

  return { isSubmitted, setSubmitted, submitForm, inputList,validateForm };
};

export default auth;
