import { Habilidade } from "./Habilidade";
import { Title } from "./Title";

export const Habilidades = () => {
  return(
    <section id="habilidades" className="flex flex-col gap-15 mt-10">
      <Title
        label="Habilidades"
      />

      <div className="grid grid-cols-2 gap-x-8 gap-y-14">
        <Habilidade 
          src="/src/assets/images/html-icon.svg"
          alt="html logo"
          label="HTML"
        />
        <Habilidade 
          src="/src/assets/images/css-icon.svg"
          alt="css logo"
          label="CSS"
        />
        <Habilidade 
          src="/src/assets/images/javascript-icon.svg"
          alt="javascript logo"
          label="JavaScript"
        />
        <Habilidade 
          src="/src/assets/images/tailwind-css-icon.svg"
          alt="tailwind logo"
          label="Tailwind"
        />
        <Habilidade 
          src="/src/assets/images/react-icon.svg"
          alt="react logo"
          label="ReactJs"
        />
        <Habilidade 
          src="/src/assets/images/git-icon.svg"
          alt="git logo"
          label="Git"
        />
      </div>
    </section>
  );
}