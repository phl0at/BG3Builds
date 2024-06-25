//Files
import styles from "./Items.module.css";
//Functions/Components
import { thunkGetEquipment, getEquipmentArray } from "../../../../redux/equipment";
//Packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ItemsTableModal({ type }) {
  const dispatch = useDispatch();
  const equipment = useSelector(getEquipmentArray)
  useEffect(() => {
    dispatch(thunkGetEquipment(type))
  }, []);
  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.imgHead} />
            <th className={styles.itemHead}>Item Name</th>
          </tr>
        </thead>
        <tbody>{equipment.map(item=>item.type === type ? item.name : "")}</tbody>
      </table>
    </main>
  );
}
