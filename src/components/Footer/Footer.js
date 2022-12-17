import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel: +385 91 5773 119'>+385 91 5773 119</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:lujerkovic@gmail.com'>lujerkovic@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialContainer>
      <SocialIcons>
        <SocialIcons href="https://github.com/LukaJerkovic">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/luka-jerkovi%C4%87-1539a3107/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
      </SocialIcons>
    </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
