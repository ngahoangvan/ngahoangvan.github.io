import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home(props) {
   const authorInfo = props.authorInfo
   const bio = authorInfo?.bio
   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box
            className={classNames(Style.avatar, Style.shadowed)}
            alt={'image of developer'}
            style={{ background: info.gradient }}
            component={'img'}
            src={authorInfo?.avatar}
            width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} p={'0.75rem'}
            mb={{ xs: '1rem', sm: 0 }}
            mr={{ xs: 0, md: '2rem' }} 
         />
         {
            bio ?
               <Box>
                  <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{authorInfo.first_name}</span><span className={Style.hand}>🤚</span>
                  </h1>
                  <h2>I'm {bio.position}.</h2>
                  <Box component={'ul'} p={'0.8rem'}>
                     {bio.hobbies.map((bio, index) => (
                        <EmojiBullet key={index} emoji={bio.emoji} text={bio.description} />
                     ))}
                  </Box>
                  <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
                     {bio.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                     ))}
                  </Box>
               </Box> : <Box></Box>
         }
      </Box>
   )
}