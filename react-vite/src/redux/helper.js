export function parseEquipment(equipment, data) {
  for (const key in data) {
    key == "helmet"
      ? (data[key] = equipment[data[key]])
      : key == "cloak"
      ? (data[key] = equipment[data[key]])
      : key == "armor"
      ? (data[key] = equipment[data[key]])
      : key == "gloves"
      ? (data[key] = equipment[data[key]])
      : key == "boots"
      ? (data[key] = equipment[data[key]])
      : key == "melee_mh"
      ? (data[key] = equipment[data[key]])
      : key == "melee_oh"
      ? (data[key] = equipment[data[key]])
      : key == "ranged_mh"
      ? (data[key] = equipment[data[key]])
      : key == "ranged_oh"
      ? (data[key] = equipment[data[key]])
      : key == "amulet"
      ? (data[key] = equipment[data[key]])
      : key == "ring_1"
      ? (data[key] = equipment[data[key]])
      : key == "ring_2"
      ? (data[key] = equipment[data[key]])
      : null;
  }
  return data;
}
