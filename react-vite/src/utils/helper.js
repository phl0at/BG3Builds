// Recursive quick sort function to sort build_classes
// by the order in which they were added to the build
export function sortClasses(classArr) {
  // Base Case
  if (classArr.length <= 1) return classArr;

  // Set pivot to last item in the array
  const pivot = classArr.pop();
  const left = [];
  const right = [];

  // Push the classes into left or right based on the order
  for (const _class of classArr) {
    _class.order < pivot.order ? left.push(_class) : right.push(_class);
  }

  // Recursively call the sort function, spreading in the results
  // on the left and right, with the pivot in the middle
  return [...sortClasses(left), pivot, ...sortClasses(right)];
}

export function filteredBuilds(builds, filters, currentUser) {
  let filteredBuilds = { ...builds };
  delete filteredBuilds["current"];

  if (currentUser) {
    if (filters["owned"]) {
      for (const key in filteredBuilds) {
        if (filteredBuilds[key].user_id != currentUser.id)
          delete filteredBuilds[key];
      }
    }

    if (filters["favorites"]) {
      for (const key in filteredBuilds) {
        if (!Object.hasOwn(currentUser.favorites, key))
          delete filteredBuilds[key];
      }
    }
  }

  if (filters["origins"]) {
    for (const key in filteredBuilds) {
      if (filteredBuilds[key].origin != filters["origins"])
        delete filteredBuilds[key];
    }
  }

  if (filters["races"]) {
    for (const key in filteredBuilds) {
      if (filteredBuilds[key].race != filters["races"])
        delete filteredBuilds[key];
    }
  }

  if (filters["backgrounds"]) {
    for (const key in filteredBuilds) {
      if (filteredBuilds[key].background != filters["backgrounds"])
        delete filteredBuilds[key];
    }
  }

  if (filters["classes"]) {
    for (const key in filteredBuilds) {
      if (
        !filteredBuilds[key].build_classes.find(
          (_class) => _class.class_id === filters["classes"]
        )
      )
        delete filteredBuilds[key];
    }
  }

  return Object.values(filteredBuilds);
}

export function applyEquipmentStats(build, items) {
  // This function takes in the build object and a
  // categorized items object from the Redux Store.
  // Then spreads the build info into a mutable object
  // which is updated based on modifiers of currently equipped items
  // modifiers are stored on the backend as strings with specific characters
  // (i.e.: "dexterity=18" or "strength+2")
  // and then split out here to determine how they change the build

  const modifiedBuild = { ...build };
  const weaponSlots = ["melee", "ranged"];
  const armourSlots = [
    "helmet",
    "cloak",
    "armour",
    "glove",
    "boot",
    "amulet",
    "ring",
  ];

  // This pattern will iterate through an array of strings, where each
  // string is a key in the build object - with the weapons handled in a
  // separate array to ensure stats from both main hand and off hand
  // weapons are calculated.

  armourSlots.map((slot) => {
    // itemsByCategory is an object of all the items of a given
    // slot/category (all amulets or armours, etc.), normalized by ID
    // so every key/value pair is the itemId/item
    const itemsByCategory = items[slot];
    const equippedItemId = modifiedBuild[slot];
    if ((itemsByCategory != undefined) & (equippedItemId != undefined)) {
      const { modifiers } = itemsByCategory[equippedItemId];

      if (modifiers) {
        // checking for each case of adding to, subtracting from,
        // or setting a particular stat.
        const addStat = modifiers.split("+")[1];
        const subtractStat = modifiers.split("-")[1];
        const setStat = modifiers.split("=")[1];
        if (addStat) {
          // some items will increase a stat by a given amount, but only up to a maximum
          // (i.e., "dexterity+2::22" where +2 is the bonus amount and ::22 is the maximum)
          // this logic will add the entire bonus when it will not bring the stat over the
          // maximum, but will also add the difference between the current value
          // and the maximum value, as long as that number is less than the bonus and a positive number.
          // (so if your dexterity is already 21, and you equip a +2,
          // the item will give you a +1 in order to reach the maximum of 22,
          // but you will stop receiving any bonus once your base stat reaches the maximum)
          const addBy = addStat.split("::")[0];
          const maximum = addStat.split("::")[1];
          const stat = modifiers.split("+")[0];
          const currentStat = modifiedBuild[stat];
          const newStat = currentStat + Number(addBy);
          const difference = maximum - currentStat;
          if (newStat <= Number(maximum)) {
            modifiedBuild[stat] = newStat;
          } else if (difference < addBy && difference > 0) {
            modifiedBuild[stat] += maximum - currentStat;
          }
        } else if (subtractStat) {
          const stat = modifiers.split("-")[0];
          modifiedBuild[stat] -= Number(subtractStat);
        } else if (setStat) {
          const stat = modifiers.split("=")[0];
          if (modifiedBuild[stat] < Number(setStat)) {
            modifiedBuild[stat] = Number(setStat);
          }
        }
      }
    }
  });

  weaponSlots.map((slot) => {
    const mh = slot + "_mh";
    const oh = slot + "_oh";
    const itemsByCategory = items[slot];
    const equippedMhId = modifiedBuild[mh];
    const equippedOhId = modifiedBuild[oh];

    if (itemsByCategory != undefined) {
      if (equippedMhId != undefined) {
        const { modifiers } = itemsByCategory[equippedMhId];
        if (modifiers) {
          const addStat = modifiers.split("+")[1];
          const subtractStat = modifiers.split("-")[1];
          const setStat = modifiers.split("=")[1];
          if (addStat) {
            const addBy = addStat.split("::")[0];
            const maximum = addStat.split("::")[1];
            const stat = modifiers.split("+")[0];
            const currentStat = modifiedBuild[stat];
            const newStat = currentStat + Number(addBy);
            const difference = maximum - currentStat;
            if (newStat <= Number(maximum)) {
              modifiedBuild[stat] = newStat;
            } else if (difference < addBy && difference > 0) {
              modifiedBuild[stat] += maximum - currentStat;
            }
          } else if (subtractStat) {
            const stat = modifiers.split("-")[0];
            modifiedBuild[stat] -= Number(subtractStat);
          } else if (setStat) {
            const stat = modifiers.split("=")[0];
            if (modifiedBuild[stat] < Number(setStat)) {
              modifiedBuild[stat] = Number(setStat);
            }
          }
        }
      }

      if (equippedOhId != undefined) {
        const { modifiers } = itemsByCategory[equippedOhId];
        if (modifiers) {
          const addStat = modifiers.split("+")[1];
          const subtractStat = modifiers.split("-")[1];
          const setStat = modifiers.split("=")[1];
          if (addStat) {
            const addBy = addStat.split("::")[0];
            const maximum = addStat.split("::")[1];
            const stat = modifiers.split("+")[0];
            const currentStat = modifiedBuild[stat];
            const newStat = currentStat + Number(addBy);
            const difference = maximum - currentStat;
            if (newStat <= Number(maximum)) {
              modifiedBuild[stat] = newStat;
            } else if (difference < addBy && difference > 0) {
              modifiedBuild[stat] += maximum - currentStat;
            }
          } else if (subtractStat) {
            const stat = modifiers.split("-")[0];
            modifiedBuild[stat] -= Number(subtractStat);
          } else if (setStat) {
            const stat = modifiers.split("=")[0];
            if (modifiedBuild[stat] < Number(setStat)) {
              modifiedBuild[stat] = Number(setStat);
            }
          }
        }
      }
    }
  });

  return modifiedBuild;
}

export function addCantripPoints(build, _class) {
  if (_class.name == "Barbarian") return build;

  const classesWithCantrips = {
    Bard: {
      1: [2, 4, 8, 9, 10, 20, 21],
      6: [3, 5, 6, 13, 15],
      10: [3, 5, 6, 13, 15],
    },
    Cleric: {},
    Druid: {},
    Fighter: {},
    Monk: {},
    Paladin: {},
    Ranger: {},
    Rogue: {},
    Sorcerer: {},
    Warlock: {},
    Wizard: {},
  };

  // if(build[_class.class_id].sub_class){

  // }else {

  // }

  console.log(build);
  console.log(_class);
  return build;
}
