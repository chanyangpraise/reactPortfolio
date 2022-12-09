// 1
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const array = [1, 2, 3, 4, 5];
// const array2 = array.map((value, index) => {
//   return <li key={index}>{value}</li>;
// });
// function ClientList(props) {
//   return <ul>{props.clientList}</ul>;
// }
// root.render(<ClientList clientList={array2} />);

// 2
const root = ReactDOM.createRoot(document.getElementById("root"));

function ListItem(props) {
	return <li 
	>{props.value}</li>;
}

function TextLists(props) {
	props; 
  const items = props.items;
  return (
    <ul>
      {items.map((value, index) => {
        return (
          <ListItem
            key={index}
            value={value}
						// onClick={clickEvent}
						// index={index}
						clickEvent={() => {
							props.clickEvent(index);
						}}
          />
        );
      })}
    </ul>
  );
}

class ListControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3],
      value: "",
    };
  }

  handleClick = (index) => {
    const lists = this.state.list;
    lists[index] = lists[index] * 2;
    this.setState({
      list: [
        ...this.state.list.slice(0, index),
        ...(this.state.list[i] = this.state.list[i] * 2),
        this.state.list.slice(index + 1, this.state.list.length),
      ],
    });
  };

  render() {
    return (
      <React.Fragment>
        <TextLists
          items={this.state.list}
          clickEvent={}
        />
      </React.Fragment>
    );
  }
}

root.render(<ListControl />);
// 3

// function solution(n) {
//   return Math.ceil(n / 7)
// }

// console.log(solution(8));

// function solution(n) {
//   return parseInt((n - 1) / 7) + 1;
// }
// console.log(solution(22));

// 4
// function solution(slice, n) {
// return Math.floor((n - 1) / slice) + 1;
// }
// console.log(solution(4,12));
