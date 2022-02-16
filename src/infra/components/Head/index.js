import NextHead from "next/head";

function Head({ title }){
  return(
    <NextHead>
      <title>{ title }</title>
      <meta name="description" content="Olá, meu nome é Patrick Reis, estudo programaçao web à mais de 2 anos criando aplicações de uso próprio e para empresas atuando como freelancer." />
      <meta name="theme-color" content="#000"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="Patrick Reis | Desenvolvedor" />
      <meta property="og:site_name" content="Patrick Reis | Desenvolvedor" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="/assets/opengraph.png" /> */}
      <meta property="og:image:url" content="https://i.imgur.com/DckCRyY.png"/>
      <meta property="og:image:type" content="image/png" /> 
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="1000" />
      <meta property="og:description" content="Olá, meu nome é Patrick Reis, estudo programaçao web à mais de 2 anos criando aplicações de uso próprio e para empresas atuando como freelancer." />
    </NextHead>
  )
}

export default Head
