import { Socials } from "./Socials";
import { ScrollSpy } from "./ScrollSpy";

export const Header = () => {
  return(
    <header className="flex flex-col gap-8">
      <div className="flex flex-col gap-2.5  text-lightcyan">
        <h1 className="text-3xl font-bold">Letícia Fernanda</h1>
          <h2 className="font-semibold text-lg">Desenvolvedora Front End</h2>
            <p className="text-lightgray font-light mt-1.5">
              Transformando conhecimento técnico em soluções visuais e intuitivas.
            </p>
      </div>

      <ScrollSpy 
        href= "#sobre"
        label="Sobre"
        isActive={true}
      />
      <ScrollSpy 
        href= "habilidades"
        label="Habilidades"
        isActive={false}
      />
      <ScrollSpy 
        href= "projetos"
        label="Projetos"
        isActive={false}
      />

      <Socials/>
    </header>
  );
}