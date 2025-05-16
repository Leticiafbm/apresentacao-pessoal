import { Habilidade } from "./Habilidade";
import { Title } from "./Title";
import jsLogo from '../../assets/images/techs/javascript-icon.svg';
import reactLogo from '../../assets/images/techs/react-icon.svg';
import tailwindLogo from '../../assets/images/techs/tailwind-css-icon.svg';
import gitLogo from '../../assets/images/techs/git-icon.svg';
import htmlLogo from '../../assets/images/techs/html-icon.svg';
import cssLogo from '../../assets/images/techs/css-icon.svg';

export const Habilidades = () => {
  return(
    <section id="habilidades" className="flex flex-col gap-15 mt-10">
      <Title
        label="Habilidades"
      />

      <div className="grid grid-cols-2 gap-x-8 gap-y-14">
        <Habilidade 
          src={htmlLogo}
          alt="html logo"
          label="HTML"
        />
        <Habilidade 
          src={cssLogo}
          alt="css logo"
          label="CSS"
        />
        <Habilidade 
          src={jsLogo}
          alt="javascript logo"
          label="JavaScript"
        />
        <Habilidade 
          src={tailwindLogo}
          alt="tailwind logo"
          label="Tailwind"
        />
        <Habilidade 
          src={reactLogo}
          alt="react logo"
          label="ReactJs"
        />
        <Habilidade 
          src={gitLogo}
          alt="git logo"
          label="Git"
        />
      </div>
    </section>
  );
}