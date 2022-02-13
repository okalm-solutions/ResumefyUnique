import FormSkills from '../../components/Forms/Forms';

function Skills() {
  return (
    <>
      <FormSkills
        title={'Skills'}
        formInput={[
          {
            label: 'First Name',
            type: 'text',
            name: 'firstName',
          },
          {
            label: 'Last Name',
            type: 'text',
            name: 'lastName',
          },
          {
            label: 'Email',
            type: 'email',
            name: 'email',
          },
          {
            label: 'Phone Number',
            type: 'text',
            name: 'phoneNumber',
          },
          {
            label: 'Git Hub',
            type: 'text',
            name: 'gitHub',
          },
          {
            label: 'Linked In',
            type: 'text',
            name: 'linkedIn',
          },
        ]}
      />
    </>
  );
}

export default Skills;
