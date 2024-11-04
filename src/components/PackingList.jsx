import { initialItems } from '../data';
import Item from './Item';


const PackingList = () => {

  return (
    <div className="list">
      <ul>
        {initialItems.map((d) => (
          <Item key={d.id} item={d} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
