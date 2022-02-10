import { Main } from '../styles/article.style';
import Head from 'next/head'

export default function PostLayout(props){
    return (
        <>
            <Head>
                <title>Patrick Reis | {props.title}</title>
            </Head>
            <Main>
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
            </Main>
        </>
    )
}