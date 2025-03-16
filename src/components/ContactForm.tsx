"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado", formData);
    // Adicione aqui a lógica para enviar o formulário
    alert("Formulário enviado com sucesso!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full py-16 bg-background-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="form-content">
            <h2 className="text-h2 font-semibold text-text-headers mb-10">
              Fale conosco para saber mais ou colaborar.
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-10">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-lg bg-gray-100 font-normal text-body-lg text-text-body focus:outline-none focus:border-brand-primary focus:bg-white"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-lg bg-gray-100 font-normal text-body-lg text-text-body focus:outline-none focus:border-brand-primary focus:bg-white"
                />
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-lg bg-gray-100 font-normal text-body-lg text-text-body focus:outline-none focus:border-brand-primary focus:bg-white"
                />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-lg bg-gray-100 font-normal text-body-lg text-text-body resize-vertical min-h-[120px] focus:outline-none focus:border-brand-primary focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-primary text-white py-4 px-8 rounded-lg font-normal text-body-lg cursor-pointer transition-opacity hover:opacity-90 w-fit md:w-auto"
              >
                Entre em contato
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/contact-illustration.svg"
              alt="Ilustração de duas pessoas interagindo com uma interface"
              width={442}
              height={434}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
