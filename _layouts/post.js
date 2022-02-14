import { Main } from '../styles/article.style';
import Head from '../src/infra/components/Head'

export default function PostLayout(props){
    return (
        <>
            <Head title={`Patrick Reis | ${props.title}`}/>
            <Main>
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
            </Main>
        </>
    )
}