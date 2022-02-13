import {
  SectionContainer,
  Heading,
  Form,
  FormInput,
  Content,
} from './Forms.styles';

function Forms({ title, formInput }) {
  return (
    <>
      <Heading>{title}</Heading>
      <SectionContainer>
        <Form>
          {formInput.map((content) => (
            <Content>
              <label>{content.label}</label>
              <FormInput type={content.type} name={content.name} />
            </Content>
          ))}
        </Form>
      </SectionContainer>
    </>
  );
}

export default Forms;
