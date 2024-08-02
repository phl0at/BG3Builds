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
