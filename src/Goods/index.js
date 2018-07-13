/* General */
import React from 'react';
import styled from 'styled-components';

/* Common components */
import { H2, H3 as DefaultH3 } from '../UI';

const Container = styled.div`
  margin-top: 40px;
  text-align: left;
`;

const Block = styled.div`
  opacity: ${props => (props.sold ? '0.2' : '1')};
  padding: 60px 0;
  text-align: center;

  @media (min-width: 576px) {
    text-align: left;
  }
`;

const Image = styled.img`
  width: 70%;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: -24px;
  padding-left: 10px;

  @media (min-width: 576px) {
    width: auto;
    margin: 0;
    margin-top: -24px;
    padding-left: 0;
  }
`;

const H3 = DefaultH3.extend`
  margin-bottom: 18px;
`;

const Link = styled.a`
  display: inline-block;
  position: relative;
  color: #888;
  margin-bottom: 12px;

  & img {
    position: absolute;
    left: -22px;
    top: 2px;
    width: 16px;
    text-decoration: none;
  }
`;

const A = styled.a`
  color: #333;
`;

const Item = ({
  sold,
  image,
  title,
  yamarket,
  yamarketPrice,
  price,
  children,
}) => (
  <Block sold={sold}>
    <Image src={image} alt={title} title={title} />
    <H2>{title}</H2>
    <Price>
      <H3>{price} ₽</H3>
      {yamarket && (
        <Link href={yamarket} title="Яндекс.Маркет" target="_blank">
          <img src={require('./yandex.png')} alt="Яндекс.Маркет" />
          &asymp; {yamarketPrice} ₽ на Маркете
        </Link>
      )}
    </Price>
    {children}
  </Block>
);

export default () => (
  <Container>
    <Item
      image={require('./oneplus5t.jpg')}
      title="oneplus 5t 64gb"
      yamarket="https://market.yandex.ru/product/1807107737?show-uid=295843337223825799716001&nid=54726&context=search"
      yamarketPrice="29 000"
      price="24 000"
    >
      <p>
        Отличный и&nbsp;очень шустрый телефон на&nbsp;Андроиде.
        OnePlus&nbsp;&mdash; одна из&nbsp;наших любимых компаний, производящих
        Android-устройства. Покупали как временный вариант замены Айфону, пока
        тот был в&nbsp;ремонте.
      </p>
      <p>
        У&nbsp;этой модели 6-дюймовый экран, 6Гб оперативки, 64Гб встроенной
        памяти и скоро должна появиться поддержка Android&nbsp;P.
      </p>
      <p>
        В&nbsp;комплекте: коробка, заводской чехол, зарядка и&nbsp;прочие
        бумажки-бумажки-бумажки.
      </p>
    </Item>

    <Item
      image={require('./ps4.jpg')}
      title="sony playstation 4 500gb"
      yamarket="https://market.yandex.ru/product/10395948?show-uid=295865264516065100916001&nid=55304&context=search"
      yamarketPrice="20 000"
      price="12 000"
    >
      <p>
        Хорошо, что представлять PS4 особо не&nbsp;нужно :) Отличная консоль, у
        которой очень развитое и&nbsp;большое коммьюнити, куча эксклюзивных игр
        и&nbsp;много других достойных плюсов.
      </p>
      <p>
        Всегда сможете найти себе компанию в&nbsp;каком-нибудь онлайн-шутере
        или, наоборот, купить синглплеер игру и&nbsp;обмазаться сюжетом дома под
        хорошее вино.
      </p>
      <p>
        Консоль продаём с&nbsp;одним джойстиком, коробкой и&nbsp;игрой Star
        Wars: Battlefront.
      </p>
    </Item>

    <Item image={require('./ps4games.png')} title="игры для ps4" price="—">
      <p>Цену игр обсуждаем индивидуально:</p>
      <p>
        – Destiny: The Taken King<br />
        – Need for Speed<br />
        – Resident Evil 5
      </p>
    </Item>

    <Item
      image={require('./vr.jpg')}
      title="sony playstation vr"
      yamarket="https://market.yandex.ru/product/14181070?show-uid=295866238503212065116001&nid=59923&context=search"
      yamarketPrice="18 000"
      price="10 000"
    >
      <p>
        Если хотите перейти на&nbsp;новый уровень ощущений в&nbsp;консольных
        играх&nbsp;&mdash; 100% берите VR.
      </p>

      <p>
        Мы&nbsp;были в&nbsp;восторге, когда первый раз запустили VR&nbsp;Worlds,
        и&nbsp;наоборот были в&nbsp;ужасе, когда начали вместе проходить
        Resident Evil&nbsp;7. Безумные монстры лезут тебе прямо в&nbsp;лицо,
        а&nbsp;когда убегаешь по&nbsp;корридору от очередного зомби&nbsp;&mdash;
        слышишь его дыхание прямо за&nbsp;своей спиной.
      </p>

      <p>
        У&nbsp;этих очков есть нюанс, про который не&nbsp;стоит
        забывать&nbsp;&mdash; у&nbsp;вас должна быть PlayStation Camera.
      </p>
    </Item>

    <Item
      image={require('./ps-camera.jpg')}
      title="sony playstation camera"
      yamarket="https://market.yandex.ru/search?cvredirect=2&text=playstation%20camera&local-offers-first=0"
      yamarketPrice="3 500"
      price="2 000"
    >
      <p>
        Особого опыта с&nbsp;этой камерой или легенды, которая стояла&nbsp;бы
        за&nbsp;её покупкой, у&nbsp;нас нет&nbsp;&mdash; мы&nbsp;купили&nbsp;её,
        когда покупали&nbsp;VR для PlayStation и с&nbsp;тех пор она служила нам
        только для этих целей.
      </p>
      <p>
        К&nbsp;нашему сожалению, мы&nbsp;не&nbsp;попробовали использовать
        её&nbsp;в&nbsp;играх без&nbsp;VR, а такие тоже есть. Надеемся, что
        у&nbsp;вас хватит на&nbsp;это времени :)
      </p>
    </Item>

    <Item
      image={require('./canon.jpg')}
      title="canon powershot g7x mark II"
      yamarket="https://market.yandex.ru/product/13477737?show-uid=295869864636549168916005&nid=56199&context=search"
      yamarketPrice="31 000"
      price="26 000"
    >
      <p>
        Отличная камера, хорошо справляющаяся со&nbsp;своими задачами:
        мы&nbsp;снмиали на неё фото и&nbsp;видео, монтировали всякие семейные
        штуки и&nbsp;иногда делали что-то прикольное для Инстаграма.
      </p>
      <p>
        Камера позиционируется как видеоблогерская, потому что отлично снимает
        видео, лучше прочих стабилизирует изображение и&nbsp;вообще лёгкая,
        компактная и&nbsp;удобная.
      </p>
      <p>
        Сравнение камер, после которого выбрали именно эту:{' '}
        <A href="https://www.youtube.com/watch?v=08JDOna1DkE" target="_blank">
          https://www.youtube.com/watch?v=08JDOna1DkE
        </A>
      </p>
      <p>
        С&nbsp;камерой отдадим карточку на&nbsp;32Гб, чтобы было где хранить
        воспоминания.
      </p>
    </Item>

    <Item image={require('./tripod.jpg')} title="rollei monkey pod" price="300">
      <p>
        Отличный трипод для камеры. Гибкий, мягкий, удобный. Принимает любую
        форму: стоит хоть ровно, хоть под углом.
      </p>
      <p>
        Покупали в&nbsp;Лондоне через Амазон в&nbsp;2017&nbsp;году. Никаких
        внешних и внутренних дефектов: ничего не&nbsp;люфтит
        и&nbsp;не&nbsp;рассыпается.
      </p>
    </Item>

    <Item
      image={require('./fujifilm.jpg')}
      title="fujifilm instax mini 7s"
      price="1 000"
      sold
    >
      <p>
        Хороший девайс с&nbsp;моментальной печатью. Мы&nbsp;выиграли его
        в&nbsp;каком-то конкурсе когда-то давно и&nbsp;пользовались совсем
        немного.
      </p>
      <p>
        Фотографии, тем не&nbsp;менее, получаются очень ламповые
        и&nbsp;приятные: у&nbsp;нас это единственные распечатанные снимки,
        например. Сейчас это большая редкость, если вы&nbsp;не&nbsp;увлекаетесь
        фотографией.
      </p>
      <p>
        В&nbsp;общем, для приятных фотографий на&nbsp;память&nbsp;&mdash;
        отличное решение. Советуем.
      </p>
    </Item>

    <Item
      image={require('./wacom.jpg')}
      title="one by wacom m"
      price="1 500"
      sold
    >
      <p>
        Хороший графический планшет, который служил верой и&nbsp;правдой
        несколько лет.
      </p>
      <p>
        Обнаружив, что этот парень последние 1.5 года лежит без дела,
        мы&nbsp;решили продать его людям, кому он&nbsp;нужнее.
      </p>
      <p>
        Если вы&nbsp;занимаетесь графическим дизайном, ретушью или ещё
        чем-нибудь, где может быть полезен планшет&nbsp;&mdash; берите, такого
        на&nbsp;первое время точно хватит. Потом сможете купить какой-нибудь
        крутой Intuos Pro, если понравится.
      </p>
    </Item>

    <Item
      image={require('./tp-link.jpg')}
      title="tp-link archer t2u"
      yamarket="https://market.yandex.ru/product/10989616?hid=723087&rt=4&suggest=1&suggest_type=model&suggest_reqid=294275077152364333206920622192034"
      yamarketPrice="1 000"
      price="500"
    >
      <p>
        Это Wi-Fi адаптер для компьютера. Очень помог нам при переезде
        и&nbsp;покупке компьютера, в&nbsp;котором не&nbsp;было встроенного
        модуля Wi-Fi, а&nbsp;провод от&nbsp;роутера не&nbsp;дотягивался
        до&nbsp;соседней комнаты.
      </p>
    </Item>

    <Item
      image={require('./moulinex.jpg')}
      title="блендер moulinex lm142a26"
      yamarket="https://market.yandex.ru/product/13362813?show-uid=295920798053647882216002&nid=54931&context=search"
      yamarketPrice="6 000"
      price="3 000"
    >
      <p>
        Покупали этот блендер в&nbsp;основном для протеиновых коктейлей, смузи и
        прочих напитков.
      </p>
      <p>
        Несколько раз делали вкусную финниково-ореховую смесь в&nbsp;нём.
        Получалось очень вкусно, никаких жутких историй из&nbsp;интернета
        с&nbsp;нами не&nbsp;случалось: вся еда легко отмывается, ножи
        не&nbsp;затупились после первой встречи с орехами и&nbsp;т.д.
      </p>
    </Item>

    <Item
      image={require('./torneo5.jpg')}
      title="гантели torneo 2 &#10005; 5кг"
      price="1 500"
      sold
    />

    <Item
      image={require('./torneo3.jpg')}
      title="гантели torneo 2 &#10005; 3кг"
      price="1 000"
    />

    <Item
      image={require('./kettler.jpg')}
      title="утяжелители для ног kettler&nbsp;2&nbsp;&#10005;&nbsp;1.5кг"
      price="1 000"
    />

    <Item
      image={require('./polaris.jpg')}
      title="весы"
      yamarket="https://market.yandex.ru/product/1002425?show-uid=295918333345999910016001&nid=54923&context=search"
      yamarketPrice="800"
      price="300"
      sold
    >
      <p>
        Хорошие электронные весы. Выдерживают нагрузку до&nbsp;150кг, вес
        измеряют довольно точно.
      </p>
    </Item>

    <Item
      image={require('./osso.jpg')}
      title="чехол-гамак для перевозки собак в машине"
      price="1 000"
    >
      <p>
        Очень полезная вещь в&nbsp;быту с&nbsp;собаками :) Покупали для своей
        Renault Megane III, остался только хороший опыт от&nbsp;использования.
      </p>
      <p>
        Наверное, не&nbsp;очень подойдёт для маленьких пород собак,
        но&nbsp;будет отличным решением для более крупных&nbsp;&mdash; после
        выездной прогулки можно не беспокоиться о&nbsp;чистоте лап,
        а&nbsp;просто оставить друга в&nbsp;гамаке.
      </p>
    </Item>
  </Container>
);
