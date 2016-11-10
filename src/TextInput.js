import {Input, InputGroup} from 'native-base';

export default ({ input: { ...inputProps }, meta: { touched, error }, icon=null, placeholder='', ...props }) => (
  <InputGroup borderType="underline"
              error={touched && error}>
    <Input {...inputProps} placeholder={placeholder} />
  </InputGroup>
);