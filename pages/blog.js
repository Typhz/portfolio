import Head from '../src/infra/components/Head';
import { Main, Section ,ContainerMotion, TitlePage, PostContainer } from '../src/components';
import { getConfig, getAllPosts } from '../api';
import { CgMouse } from "@react-icons/all-files/cg/CgMouse";
import Link from 'next/link'

export default function Blog(props) {
  return (
    <ContainerMotion>
      <Head title="Patrick Reis | Desenvolvedor Frontend"/>
      <Main>
        <TitlePage>
          Blog.
        </TitlePage>
        <p style={{
          padding: '0 2rem',
        }}>
          Compartilho qualquer coisa que possa<br/> ajudar outras pessoas, tecnologias que estou usando e coisas legais que fiz.
        </p>
        <h1 style={{
          fontSize: '1rem',
          fontWeight: 500,
          borderBottom: '1px solid #000',
          marginTop: 20,
          alignItems: 'center',
          display: 'flex',
        }}>
          <CgMouse style={{
            marginRight: 10,
          }}/>
          Scroll Down 
        </h1>
      </Main>
      <Section>
      <ul>
          {props.posts.map(function(post, key){
              return (
                  <li key={key} style={{listStyle: 'none',}}>
                      <Link href={'/posts/'+ post.slug} passHref>
                        <PostContainer>
                          <small>{post.date}</small>
                          <h1>{post.title}</h1>
                          <p>{post.description}</p>
                          <a>Ler Mais</a>
                        </PostContainer>
                      </Link>
                  </li>
              )
          })}
        </ul>
      </Section>
    </ContainerMotion>
  );
}


export async function getStaticProps(){
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
      props: {
          posts: allPosts,
          title: config.title,
          description: config.description,
          date: config.date
      }
  }
}