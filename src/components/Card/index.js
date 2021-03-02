import '../../styles/components/Cards.css';

function Card(props) {
  return (
      <figure>
        <img src={props.src} alt=""/>
        <figcaption>
          {props.alt}
        </figcaption>
      </figure>
  );
}

export default Card;