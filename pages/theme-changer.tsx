import { ChangeEvent, useState } from 'react';
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import { Layout } from '../components/layouts';

const ThemeChangerPage = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const onChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    console.log(selectedTheme);
    setCurrentTheme(selectedTheme);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onChangeTheme}>
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel value="custom" control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;
