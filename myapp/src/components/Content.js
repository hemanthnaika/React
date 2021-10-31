import ListItem from "./Listitem";

const Content = () => {
  const chores = ["item 1", "Item 2", "Item 3", "Item 4"];
  console.log("I Mounted");
  return (
    <div className="container">
      <ul>
        
        {chores.map((chore) => (
          // Update
          <ListItem chore="Hi" />
        ))}
      </ul>
    </div>
  );
};

export default Content;
