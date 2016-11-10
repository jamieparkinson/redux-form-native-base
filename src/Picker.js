import {Picker} from 'native-base';

export default ({ input: { value, onChange, ...inputProps }, meta, ...props }) => (
  <Picker selectedValue={value}
          onValueChange={(itemValue) => onChange(itemValue)}
          {...props}/>
);