import { useState, useEffect } from "react";

export function useForm(validations) {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(...form);
  }, [form]);
  return { form };
}

export default useForm;
