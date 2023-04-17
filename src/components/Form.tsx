import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <label htmlFor="">Nome</label>
        <input
          type="text"
          name="nome"
          id=""
          className="border shadow-sm border-zinc-800 h-10 p-2  "
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Email</label>
        <input
          className="border shadow-sm border-zinc-800 h-10 p-2  "
          type="email"
          name="email"
          id=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Senha</label>
        <input
          className="border shadow-sm border-zinc-800 h-10 p-2  "
          type="password"
          name="senha"
          id=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Confirmar Senha</label>
        <input
          className="border shadow-sm border-zinc-800 h-10 p-2 "
          type="password"
          name="confirmar-senha"
          id=""
        />
      </div>
      <button className="bg-emerald-500 rounded font-semibold text-white h-10">
        Submit
      </button>
    </form>
  );
};

export default Form;
