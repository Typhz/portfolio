import Head from '../../src/infra/components/Head'
import { Main, SocialMedia } from "../../styles/blog.style"; 
import { getPostBySlug, getAllPosts } from "@api"
import PostLayout from '@layouts/post'
import { ContainerMotion } from '../../src/components'

export default function Blog(props) {
  return (
    <ContainerMotion>
      <Head title="Patrick Reis | Desenvolvedor Frontend"/>
      <PostLayout title={props.title} content={props.content}/>
    </ContainerMotion>
  );
}
export async function getStaticProps(context){
  return {
      props: await getPostBySlug(context.params.slug)
  }
}

export async function getStaticPaths(){
  let paths = await getAllPosts()
  paths = paths.map(post => ({
      params: { slug:post.slug }
  }));
  return {
      paths: paths,
      fallback: false
  }
}