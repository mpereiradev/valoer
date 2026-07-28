import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { SpeedLines } from "@/components/speed-lines";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="bg-white py-section-sm lg:py-section">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-navy-800 px-8 py-14 text-center text-white lg:px-16 lg:py-20">
            <SpeedLines className="absolute inset-0 h-full w-full text-impulse-500" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-white lg:text-4xl">
                Descubra em 1 minuto quanto você economiza com a Valoer.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-white/75">
                Sem cadastro, sem compromisso. Só a melhor opção para o seu perfil.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="#simulador" surface="dark" variant="primary">
                  Simular agora
                </ButtonLink>
                <ButtonLink href="#produtos" surface="dark" variant="secondary">
                  Ver soluções
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
