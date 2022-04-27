import { useState, useRef } from "react";
import "./DnD.css";

const DnD = ({
  data=[
    {
      title: "Group 0",
      items: [
        '1', '2', '3'
      ]
    },
    {
      title: "Group 1",
      items: [
        '4', '5'
      ]
    }
  ],
  setData,
  newLabel=""
}) => {
  //const [data, setData] = useState(init);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, coordinates) => {
    dragItem.current = coordinates;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  }

  const handleDragEnter = (e, coordinates) => {
    const activeItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setData(prevData => {
        let newData = JSON.parse(JSON.stringify(prevData));
        newData[coordinates.groupIndex].items.splice(coordinates.itemIndex, 0, newData[activeItem.groupIndex].items.splice(activeItem.itemIndex,1)[0]);
        dragItem.current = coordinates;
        return newData;
      });
    }
  }

  const handleDragEnd = () => {
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
    setDragging(false);
  }

  const handleAddItem = (groupIndex, newIndex) => {
    setData(prevData => {
      let newData = JSON.parse(JSON.stringify(prevData));
      newData[groupIndex].items.push(`${newLabel} ${newIndex}`);
      return newData;
    })
  }

  const getStyles = ({ groupIndex, itemIndex }) => {
    const activeItem = dragItem.current;
    return activeItem?.groupIndex === groupIndex
      && activeItem?.itemIndex === itemIndex
      ? 'dnd__item-active dnd__item' : "dnd__item";
  }

  return (
    <div className="drag-n-drop">
      {data.map(({title, items}, groupIndex) => (
        <div
          className="dnd__group"
          key={groupIndex}
          onDragEnter={(e) => {
            if (dragging && !items.length) {
              handleDragEnter(e, { groupIndex, itemIndex: 0 });
            }
          }}
        >
          <div className="dnd__group-title">
            <span>{title}</span>
            <span
              className="dnd__group-add"
              onClick={() => handleAddItem(groupIndex, items.length+1)}
            >+</span>
          </div>
          {items.map((item, itemIndex) => (
            <div draggable
              onDragStart={(e) => handleDragStart(e, { groupIndex, itemIndex })}
              onDragEnter={(e) => {
                dragging && handleDragEnter(e, { groupIndex, itemIndex });
              }}
              className={dragging ? getStyles({ groupIndex, itemIndex }) : "dnd__item"}
              key={itemIndex}
            >{item}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DnD;
