import { Container } from './styles';

function PostContainer({ children, href, onClick, ref }) {
  return (
    <Container href={href} onClick={onClick} ref={ref}>
      {children}
    </Container>
  );
};

export default PostContainer;
