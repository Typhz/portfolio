import Head from '../src/infra/components/Head'
import { Main, Section ,ContainerMotion, TitlePage } from '../src/components'
import { getConfig, getAllPosts } from '../api'
import Link from 'next/link'

export default function Blog(props) {
  return (
    <ContainerMotion>
      <Head title="Patrick Reis | Desenvolvedor Frontend"/>
      <Main>
        <TitlePage>
          Blog <span>✍️</span>
        </TitlePage>
        <p>Compartilho qualquer coisa que possa<br/> ajudar outras pessoas, tecnologias que estou usando e coisas legais que fiz.</p>
      </Main>
      <Section>
      <ul>
          {props.posts.map(function(post, idx){
              return (
                  <li key={idx}>
                      <Link href={'/posts/'+ post.slug}>
                          <a>{post.title}</a>
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
          description: config.description
      }
  }
}