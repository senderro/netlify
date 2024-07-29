"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import './teamSection.css';

interface TeamMemberProps {
  src: string;
  alt: string;
  text: string;
  reverse?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ src, alt, text, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`team-member ${reverse ? "reverse" : ""} ${inView ? "visible" : ""}`}
    >
      <div className="team-member-image">
        <Image
          src={src}
          alt={alt}
          width={500} // Define a largura base
          height={500} // Define a altura base
          sizes="100vw"
          style={{ objectFit: 'cover' }} // Ajusta a imagem para preencher o contêiner
          layout="responsive"
        />
      </div>
      <div className="team-member-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-section-title">NOSSA EQUIPE</h2>
      <TeamMember
        src="/dotor.png"
        alt="Team member 1"
        text="João Silva é o nosso especialista em desenvolvimento de software com mais de 10 anos de experiência."
      />
      <TeamMember
        src="/corno.png"
        alt="Team member 2"
        text="Maria Oliveira é a nossa gerente de projetos, garantindo que todos os prazos sejam cumpridos."
        reverse
      />
      <TeamMember
        src="/dotor.png"
        alt="Team member 3"
        text="Carlos Pereira lidera nossa equipe de design, trazendo criatividade e inovação a cada projeto."
      />
    </section>
  );
};

export default TeamSection;
