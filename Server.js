//1 Backend Question:
// Part 1 Write a function nextServerNumber(Array).
// [2,7,1,5,9] -> Allocate next_server -> 3.
// [] -> 1
// [1,2,3] -> 4
// [2,3,4] -> 1
let array = [2,7,1,5,9];
console.log(nextServerNumber2(array));

//Part 2 region wise server Allocation
var regionServer = {};
console.log(allocate("south")); //-> result -> south1
console.log(allocate("south")); //1-> result -> south2
console.log(allocate("north")); //-> result -> north1
Deallocate("south1");
console.log(allocate("south")); //-> south1
console.log(allocate("south")); //-> south3







function nextServerNumber(arr) {
  //O(n^2) time comp
  if (arr.length === 0) {
    return 1;
  }
  //find max
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  //check the server number if exist
  let newArray = new Array(max).fill(0);
  for (let i = 0; i < newArray.length; i++) {
    if (!arr.includes(i + 1)) {
      return i + 1;
    }
  }
  //if server number not exist, return next
  return max + 1;
}

function nextServerNumber2(arr) {
  //O(n) time comp// instead of Array approach, use object
  if (arr.length === 0) {
    return 1;
  }
  //find max
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  //allocate the server number in obj
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
  }
  //check minimum server number that not exist upto  max
  for (let i = 1; i <= max; i++) {
    if (!obj[i]) {
      return i;
    }
  }
  //if server number not exist, return next
  return max + 1;
}

function allocate(region) {
  let existSever = Object.keys(regionServer);
  if (!existSever.includes(region)) {
    regionServer[region] = [1];
    return `${region}1`;
  } else {
    let nextServer = nextServerNumber2(regionServer[region]);
    regionServer[region].push(nextServer);
    return `${region}${nextServer}`;
  }
}
function Deallocate(server) {
  const [name, number] = splitServerName(server);
  let existSever = Object.keys(regionServer);

  if (name == null || number == null || !existSever.includes(name)) {
    console.log(
      "it is not look like server name with server number , check the spelling or mentioned server not exist "
    );
  } else {
    if (!regionServer[name].includes(parseInt(number))) {
      console.log("server that you entered is not in list, check again");
    } else {
      regionServer[name] = regionServer[name].filter((x) => x != number);
    }
  }
}
function splitServerName(server) {
  for (let i = 0; i < server.length; i++) {
    let pattern = new RegExp(/[0-9]/);
    if (pattern.test(server[i])) {
      return [
        server.slice(0, i) == "" ? null : server.slice(0, i),
        server.slice(i),
      ];
    }
  }
  return [null, null];
}
