import React from "react";
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles'
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Wesley Alexandre</h1>
        <h2>@wesley_alex</h2>

        <p>
          Developer at <a href="https://www.linkedin.com/in/wesley-alexandre-coelho-126a99206">Linkedin</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 24 de setembro de 2002
          </li>

          <Followage>
            <span>seguindo <strong>0</strong></span>
            <span><strong>0 </strong>seguidores</span>
          </Followage>
        </ul>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage