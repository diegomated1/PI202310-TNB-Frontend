import React from "react";

function SecurityQuestionsForm() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">
        Formulario para definir las preguntas de seguridad
      </h1>
      <form>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="question">
            Seleccione una opción:
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="question"
              name="question"
            >
              <option value="">Seleccione una pregunta</option>
              <option value="graduation">
                ¿A que edad te graduaste de la secundaria?
              </option>
              <option value="pet">¿Cual es el nombre de tu primera mascota?</option>
              <option value="country">
                ¿Cual es el nombre de tu país favorito?
              </option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="answer">
            Tu respuesta:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="answer"
            type="text"
            placeholder="Type your answer here"
            name="answer"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Aceptar
        </button>
      </form>
    </div>
  );
}

export default SecurityQuestionsForm;