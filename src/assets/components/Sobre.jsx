import { Title } from "./Title"

export const Sobre = () =>{
  return(
    <section id="sobre" className="flex flex-col gap-6 mt-18">
      <Title
        label="Sobre"
      />

      <p className="text-lightgray font-light leading-relaxed">
        Sou desenvolvedora front-end movida pela curiosidade sobre como as coisas realmente funcionam. Gosto de investigar, entender a lógica por trás do código.
      </p>
      <p className="text-lightgray font-light leading-relaxed">
        Pra mim, programar vai além de empilhar componentes ou fazer algo “bonito”: é pensar em estrutura, clareza e intenção. Valorizo soluções simples, bem pensadas e que respeitam quem vai usar e quem vai dar manutenção depois.
      </p>
      <p className="text-lightgray font-light leading-relaxed">
        Estou em constante aprendizado, sempre buscando ir além da superfície e entender o que faz um sistema ser bem projetado de verdade.
      </p>
    </section>
  );
}