import React, { useState } from "react";

const personalInfoForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setAddress(e.target.value);
  };

  const handleAvatarChange = (e: { target: { files: React.SetStateAction<string>[]; }; }) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!name || !lastName || !email || !address || !avatar) {
      alert("Please fill in all fields");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
    } else {
      // Form data is valid, do something with it
      console.log("Form data:", {
        name,
        lastName,
        email,
        address,
        avatar,
      });
    }
  };

  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="John"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="last-name">
          Apellido
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="last-name"
          type="text"
          placeholder="Doe"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
          Direccion
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          rows="4"
          placeholder="123 Main St."
          value={address}
          onChange={handleAddressChange}
        ></textarea></div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="profile-pic">
                Avatar
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile-pic" type="file"/>
        </div>
        <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Guardar
            </button>
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Cancelar
            </button>
        </div>
    </form>) }

    export default personalInfoForm;
