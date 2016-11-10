import React from 'react';
import {CheckBox} from 'native-base';

export default ({ input: { onChange, checked, ...inputProps }, ...props }) => (
  <CheckBox checked={!!checked}
            onClick={() => onChange(!checked)} />
);