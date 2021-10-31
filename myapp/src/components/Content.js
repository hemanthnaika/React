import ListItem from "./Listitem";

const Content = () => {
  const chores = ["item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <div className="container">
      <ul>
        {chores.map((chore) => (
          <ListItem chore={chore}/>
        ))}
      </ul>
    </div>
  );
};

export default Content;
