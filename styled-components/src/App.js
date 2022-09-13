import { ThemeProvider } from "styled-components";
import Button, { DangerButton } from "./components/form/Button";
import Form from "./components/form/Form";
import Input from "./components/form/Input";
import Container from "./components/heading/layout/Container";
import PageHeading from "./components/heading/PageHeading";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <PageHeading>Register</PageHeading>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="City" colour="#5d94d5" />
          <Button>Register</Button>
          <DangerButton>Cancel</DangerButton>
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
