import Head from '../src/infra/components/Head'
import { Section, Button, Badge, TitlePage ,Card ,Grid } from '../src/components/index'
import { Main, SocialMedia, TitleSection } from "../styles/home.style"; 
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { useRouter } from 'next/router'
import { ContainerMotion } from '../src/components'


export default function Home() {
  const projects = [
    {
      "name": "exercícios-CeV — Comunidade",
      "desc": "Todos os exercícios do Curso de Python, do canal Curso em Vídeo, resolvidos em Python, Javascript, Java, C++, C# feitos em comunidade.",
      "repository": "https://github.com/Coding-in-community/exercicios-CeV",
    },
    {
      "name": "Quiz App",
      "desc": "Projeto de quiz simples usando ReactJs, Styled Components e Axios.",
      "demo": "https://nervous-jang-837998.netlify.app/",
      "repository": "https://github.com/Typhz/quiz-app",
    },
  ]
  const getCurriculum = () => {
    fetch('http://localhost:3000/cv.pdf',
    {
      method: 'GET',
      encoding: 'binary',
      responseType: 'blob',
    }).then(response => {
      if (response.status !== 200) {
        throw new Error('Sorry, I could not find that file.');
      }
      return response.blob();
    }).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.setAttribute('download', 'curriculum.pdf');
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
  }
  const router = useRouter()
  return (
    <ContainerMotion>
      <Head title="Patrick Reis | Desenvolvedor Frontend"/>
      <Main>
        <div>
          <small>Desenvolvedor Frontend</small>
          <TitlePage>
            Olá, eu me chamo Patrick <span>👋</span>
          </TitlePage>
          <p>Desenvolvedor Frontend com mais de 2 anos de estudo criando sistemas web.</p>
          <div style={{ width: 300, alignItems: 'center',justifyContent: 'space-between' ,display: 'flex', marginTop: 12, }}>
            <Button 
              variant="primary" 
              size="sm"
              onClick={getCurriculum}
            >
                Baixar CV
            </Button>
            <small>ou</small>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => router.push('/blog')}
            >
              Visualizar Blog
            </Button>
          </div>
          <SocialMedia>
            <a href="https://github.com/Typhz" target="_blank" rel="noreferrer">
              <FiGithub/>
            </a>
            <a href="https://linkedin.com/in/Typhz" target="_blank" rel="noreferrer">
              <FiLinkedin/>
            </a>
          </SocialMedia>
        </div>
      </Main>
      <Section>
        <TitleSection>Portfolio</TitleSection>
        {projects.map((item, key) => (
            <Card key={key}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <br/>
              <a 
                target="_blank"
                className='link-portfolio' 
                href={item.demo}
                rel="noreferrer"
              >
                Demo 
                <FiArrowRight />
              </a>
              <a 
                target="_blank"
                className='link-portfolio' 
                href={item.repository}
                rel="noreferrer"
              >
                Repositorio
                <FiArrowRight />
              </a>
            </Card>
        ))}
      </Section>
      <Section>
          <TitleSection>Sobre</TitleSection>
          <Grid>
            <div>
              <p>
                Olá, meu nome é Patrick Reis, sou estudo programaçao web à mais de 2 anos criando aplicações de uso próprio ou para outras empresas atuando como freelancer. Procuro sempre aprender e trabalhar com novas tecnologias.

              </p>
              </div>
              <div>
                <Badge>HTML5</Badge>
                <Badge>CSS3</Badge>
                <Badge>ES6</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Vuejs</Badge>
                <Badge>NuxtJs</Badge>
                <Badge>Reactjs</Badge>
                <Badge>NextJs</Badge>
                <Badge>ExpressJs</Badge>
                <Badge>Adonis</Badge>
                <Badge>MongoDB</Badge>
                <Badge>MySql</Badge>
              </div>
        </Grid>
      </Section>
    </ContainerMotion>

  );
}
