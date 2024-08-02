// Recursive quick sort function to sort build_classes
// by the order in which they were added to the build
export function sortClasses(classArr){
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
