/* General */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Sticky from 'react-stickynode';

/* Common components */
import { Grid, H1, H2 } from './UI';

/* Page components */
import Goods from './Goods';

const Container = styled.section`
  padding-top: 36px;

  @media (min-width: 576px) {
    padding-top: 100px;
  }
`;

const Title = H1.extend`
  margin-bottom: 60px;
`;

const Block = styled.div`
  text-align: left;
  margin-bottom: 36px;

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

const BlockSticky = Block.extend`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const NoSticky = Block.extend`
  @media (min-width: 768px) {
    display: none;
  }
`;

const P = styled.p`
  margin-top: 20px;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 28px;
  padding: 0;
`;

const Point = styled.li`
  position: relative;
  margin-bottom: 28px;
  padding-left: 42px;

  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -3px;
    left: 0;
    content: attr(data-content);
    width: 24px;
    height: 24px;
    border: 1px solid #000;
    border-radius: 100%;
    font-size: 12px;
    color: #000;
  }
`;

const Link = styled.a`
  color: #333;
`;

const Metro = styled.span`
  color: green;

  &:before {
    display: inline-block;
    position: relative;
    top: -1px;
    content: '';
    width: 6px;
    height: 6px;
    background: green;
    border-radius: 100%;
    margin: 0 6px 0 3px;
  }
`;

export default () => (
  <Container>
    <Grid>
      <Row center="xs">
        <Col xs={12} md={6}>
          <Title>
            гаражная<br />распродажа
          </Title>
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12} md={5}>
          <Block>
            <H2>что это?</H2>
            <P>
              Нас ждут большие перемены, поэтому мы&nbsp;решили немного
              подготовить себя к&nbsp;этому этапу. Начать хотим с&nbsp;продажи
              вещей, которыми не пользуемся.
            </P>
            <P>
              Кто-то хочет начать делать себе смузи по&nbsp;утрам,
              кто-то&nbsp;&mdash; пройти Resident Evil 7&nbsp;в очках
              виртуальной реальности, а&nbsp;кто-то давно откладывает тренировки
              дома и&nbsp;как раз хотел покупать спортивный инвентарь.
            </P>
            <P>Давайте поможем друг другу!</P>
          </Block>
          <NoSticky>
            <H2>как забрать?</H2>
            <List>
              <Point data-content="1">
                Написать Косте&nbsp;(<Link
                  href="https://t.me/zhabinskiy"
                  target="_blank"
                >
                  @zhabinskiy
                </Link>) или&nbsp;Вере&nbsp;(
                <Link href="https://t.me/vkulikova" target="_blank">
                  @vkulikova
                </Link>) в&nbsp;Телеграм и&nbsp;забронировать вещь
                или&nbsp;сразу несколько
              </Point>
              <Point data-content="2">
                Мы&nbsp;договоримся о&nbsp;встрече, обсудим удобные дату
                и&nbsp;время
              </Point>
              <Point data-content="3">
                В&nbsp;день X встретим вас у&nbsp;<Metro>м. Аэропорт</Metro>{' '}
                и&nbsp;обменяем вещи на&nbsp;деньги :)
              </Point>
            </List>
          </NoSticky>
          <Goods />
        </Col>
        <Col xs={12} mdOffset={1} md={5}>
          <Sticky enabled top={50}>
            <BlockSticky>
              <H2>как забрать?</H2>
              <List>
                <Point data-content="1">
                  Написать Косте&nbsp;(<Link
                    href="https://t.me/zhabinskiy"
                    target="_blank"
                  >
                    @zhabinskiy
                  </Link>) или&nbsp;Вере&nbsp;(
                  <Link href="https://t.me/vkulikova" target="_blank">
                    @vkulikova
                  </Link>) в&nbsp;Телеграм и&nbsp;забронировать вещь
                  или&nbsp;сразу несколько
                </Point>
                <Point data-content="2">
                  Мы&nbsp;договоримся о&nbsp;встрече, обсудим удобные дату
                  и&nbsp;время
                </Point>
                <Point data-content="3">
                  В&nbsp;день X встретим вас у&nbsp;<Metro>м. Аэропорт</Metro>{' '}
                  и&nbsp;обменяем вещи на&nbsp;деньги :)
                </Point>
              </List>
            </BlockSticky>
          </Sticky>
        </Col>
      </Row>
    </Grid>
  </Container>
);
