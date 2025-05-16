import { Projeto } from "./Projeto";
import { Title } from "./Title";
import imagemCalcHipoteca from "../../assets/images/mortgage-calculator.png"
import imagemCalcGorjeta from "../../assets/images/tip-calculator.png"
import imagemCalcIdade from "../../assets/images/age-calculator.png"

export const Projetos = () =>{
  return(
    <section id="projetos" className="flex flex-col gap-14 mt-10">
      <Title
        label="Meus Projetos"
      />

        <div className="lg:grid lg:grid-cols-2 lg:w-5/6 lg:gap-x-8 lg:gap-y-12">
          <Projeto 
            src={imagemCalcGorjeta}
            alt="imagem da calculadora de gorjeta"
            title="Calculadora de Gorjeta"
            desc="Sistema de cálculo dinâmico com base em inputs do usuário."
            repo="https://github.com/Leticiafbm/Tip-Calculator-React-Tailwind"
            deploy="https://leticiafbm.github.io/Tip-Calculator-React-Tailwind/"
            techs={["ReactJs", "Tailwind"]}
          />
          <Projeto 
            src={imagemCalcHipoteca}
            alt="imagem da calculadora de hipoteca"
            title="Calculadora de hipoteca"
            desc="Aplicação com inputs controlados e validação dinâmica."
            repo="https://github.com/Leticiafbm/mortgage-calculator-frontend-mentor"
            deploy="https://leticiafbm.github.io/mortgage-calculator-frontend-mentor/"
            techs={["HTML", "Tailwind", "JavaScript"]}
          />
          <Projeto 
            src={imagemCalcIdade}
            alt="imagem da calculadora de idade"
            title="Calculadora de idade"
            desc="Cálculo dinâmico de idade com parsing e validação em tempo real."
            repo="https://github.com/Leticiafbm/Age-Calculator-Frontend-Mentor"
            deploy="https://leticiafbm.github.io/Age-Calculator-Frontend-Mentor/"
            techs={["HTML", "Tailwind", "JavaScript"]}
          />
        </div>
        
    
    </section>
  );
}