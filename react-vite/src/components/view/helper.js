export function filteredBuilds(builds, filters, currentUser) {
    let arr = [];
    const filtersApplied = Object.values(filters).length;

    if (currentUser) {
      if (filters["owned"]) {
        builds.forEach((build) => {
          if (build.user_id === currentUser.id) arr.push(build);
        });
      }

      if (filters["favorites"]) {
        builds.forEach((build) => {
          if (currentUser.favorites[build.id]) arr.push(build);
        });
      }
    }

    if (filters["origin"]) {
      builds.forEach((build) => {
        if (build.origin === filters["origin"]) arr.push(build);
      });
    }

    if (filters["race"]) {
      builds.forEach((build) => {
        if (build.race === filters["race"]) arr.push(build);
      });
    }

    if (filters["background"]) {
      builds.forEach((build) => {
        if (build.background === filters["background"]) arr.push(build);
      });
    }

    if (filters["class"]) {
      builds.forEach((build) => {
        const hasClass = build.build_classes.find(
          (_class) => _class.class_id === filters["class"]
        );
        if (hasClass) arr.push(build);
      });
    }

    return filtersApplied ? arr : builds;
  }
