function sym(...args) {
  console.log(args, args.length);
  let chops = [...args];
  console.log(chops);
  let current = [];
  //   console.log(current)
  //   console.log(chops[0].includes(1))

  for (let i = 1; i < args.length; i++) {
    console.log(chops, "here");
    current = [];
    for (let i = 0; i < 10; i++) {
      if (
        (chops[0].includes(i) && !chops[1].includes(i)) ||
        (!chops[0].includes(i) && chops[1].includes(i))
      )
        current.push(i);
    }
    if (chops.length > 2) {
      chops.splice(0, 2);
      chops.unshift(current);
    }
  }
  return current;
}
