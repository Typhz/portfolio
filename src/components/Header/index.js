import { FaRegMoon } from "@react-icons/all-files/fa/FaRegMoon";
import { IoLanguage } from "@react-icons/all-files/io5/IoLanguage";
import { HeaderContainer } from "./styles";
import Link from 'next/link'
export default function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <h3>
            Patrick Reis.
          </h3>
          <h3 className="brand-mobile">
            Pr
          </h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className="active">Home</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <Link href="/contact">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div style={{width: 40, display: 'flex', justifyContent: 'space-between'}}>
          <IoLanguage />
          <FaRegMoon />
        </div> */}
      </HeaderContainer>
    </>  
  );
}
