import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello I'm Luka Jerković <br />
      Web Developer
    </SectionTitle>
    <SectionText>
      I'm a junior web developer searching for my first job in web development.
    </SectionText>
    <Button href='mailto:lujerkovic@gmail.com'>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;