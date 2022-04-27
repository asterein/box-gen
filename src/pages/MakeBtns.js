import { useState } from "react";
import BtnGen from "../components/gen/BtnGen";
import DnD from "../components/DnD/DnD";

const MakeBtns = () => {
  const init = [
    {
      title: "Buttons",
      items: [
        "Button 1", "Button 2"
      ]
    }
  ];

  const [ data, setData ] = useState(init);

  function dataToBtns () {
    const items = data[0]?.items;
    const btns = [];
    for (let index in items) {
      btns.push({
        label: items[index],
        url: "https://github.com/asterein"
      })
    }

    return btns;
  }

  const BtnDnD = ({item}) => (
    <div>{item?.label} / {item?.url} {console.log(item)}</div>
  );

  return (
    <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", margin: "0 auto" }}>
      <DnD
        data={data}
        setData={setData}
        newLabel="Button"
      />
      <div style={{ gridColumn: "span 2" }}>
      <BtnGen buttons={dataToBtns()} />
      </div>
    </div>
  )
}

export default MakeBtns;
