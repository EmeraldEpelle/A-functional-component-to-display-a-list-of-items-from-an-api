
const List = ({ items, renderItem }) => {

    return ( 
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            {renderItem(item)}
          </li>
        ))}
      </ul> 
       );
};
 
export default List;