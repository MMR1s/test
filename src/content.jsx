import "./content.css";
import List from "./list.jsx";
function Card(props) {
  return (
    <div className="card1">
      <h2>{props.name}</h2>
      <div className="body">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, ex sapiente. Laboriosam ab vitae fuga officiis ullam
          architecto culpa maxime dolores, ipsam velit pariatur repudiandae,
          consequatur porro, perferendis error adipisci!
        </p>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </a>
      </div>
      <h2>Hobbies</h2>
      <List />
    </div>
  );
}

export default Card;
