function List() {
  let sports = ["bodybuilding", "swimming", "football"];

  let click = (e) => {
    console.log(e);
  };

  let id = 0;
  const list_item = sports.map((sport) => (
    <li onClick={(e) => click(e)} key={id++}>
      {sport}
    </li>
  ));
  return <ul>{list_item}</ul>;
}

export default List;
