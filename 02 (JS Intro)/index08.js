// /////////////////// Truthy & Falsey // /////////////////// All data in
// javascript have an inherently Truthy or Falsey value. true false "dave"
// if(null){     console.log("It is true!") } else {     console.log("It is
// false!") } Falsey Values 0 "" null undefined false NaN

var user = {
    name: "DAVE",
    email: null,
    friends: [
        "rick", "sarah"
    ],
    address: {
        street: "123 street",
        city: "gotham"
    },
    id: "0",
    nickname: undefined
}

const results = {
    truthy: [],
    falsey: [],
};

Object
    .entries(user)
    .forEach(([key, val]) => {
        if (val) {
            results.truthy.push(key);
        } else {
            results.falsey.push(key);
        }
        
        if (key == 'address') {
            Object.entries(val).forEach(([k, v]) => {
                if (v) {
                    results.truthy.push(`${key}.${k}`);
                } else {
                    results.falsey.push(`${key}.${k}`);
                }
            });
        }
    });

console.log(`For the 'User Object', Truthy values are ${results.truthy} and Falsey values are ${results.falsey}`);
