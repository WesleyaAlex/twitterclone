import React from "react";
import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LiketIcon } from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Wesley</strong>
            <span>@wesley</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Foguete não tem ré</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              0
            </Status>
            <Status>
              <RetweetIcon />
              0
            </Status>
            <Status>
              <LiketIcon />
              0
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet