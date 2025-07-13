import PropTypes from "prop-types";
function List(props){
    // const fruits1 = ["apple", "orange","banana","pineapple","guava"];
    // fruits1.sort();
    // const listItems = fruits1.map(fruit => <li>{fruit}</li>);
    // return (<ol>{listItems}</ol>)



    // const fruits2 = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "orange", calories: 45}, 
    //                 {id: 3, name: "banana", calories: 105}, 
    //                 {id: 4, name: "pineapple", calories: 37}, 
    //                 {id: 5, name: "guava", calories: 90}];

    // fruits2.sort((a, b) => a.name.localeCompare(b.name));    // Alphabetical
    // fruits2.sort((a,b) => b.name.localeCompare(a.name));  // Reverse
    // fruits2.sort((a,b) => a.calories - b.calories);     //Numeric
    // fruits2.sort((a,b) => b.calories - a.calories);     //Reverse Numeric

    // const lowCalFruits = fruits2.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits2.filter(fruit => fruit.calories >= 100);


    const category = props.category;
    const itemList = props.items;


    const listItems2 = itemList.map(item => <li key={item.id}>
                                                    {item.name} : &nbsp;
                                                    <b>{item.calories}</b>
                                                    </li>);
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems2}</ol>
        </>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List