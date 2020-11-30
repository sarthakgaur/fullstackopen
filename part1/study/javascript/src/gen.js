/* Variable */

function variables() {
    const x = 1;
    let y = 5;

    console.log(x, y);
    y += 10;
    console.log(x, y);
    y = 'sometext';
    console.log(x, y);
    // x = 4; // causes an error
}

/* Arrays */

function arrays() {
    let t = [1, -1, 3];

    t.push(5);

    console.log(t.length);
    console.log(t[1]);

    t.forEach(value => {
        console.log(value)
    });

    // Testing concat
    t = [1, -1, 3];
    const t2 = t.concat(5);

    console.log(t);
    console.log(t2);

    // Testing map
    t = [1, 2, 3];
    const m1 = t.map(value => value * 2);
    console.log(m1);

    // Transforming integes values to string using map
    const m2 = t.map(value => '<li>' + value + '</li>');
    console.log(m2);

    // Testing destructuring assignment
    t = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = t;

    console.log(first, second);
    console.log(rest);
}

/* Objects */

function object() {
    const object1 = {
        name: 'Arto Hellas',
        age: 35,
        education: 'PhD',
    };

    const object2 = {
        name: 'Full Stack web application development',
        level: 'intermediate studies',
        size: 5,
    };

    const object3 = {
        name: {
            first: 'Dan',
            last: 'Abramov',
        },
        grades: [2, 3, 5, 3],
        department: 'Stanford University',
    };

    console.log(object1.name);
    const fieldName = 'age';
    console.log(object1[fieldName]);

    object1.address = 'Helsinki';
    object1['secret number'] = 12341;

    console.log(object1);
}

/* Functions */

const sum = (p1, p2) => {
    console.log(p1);
    console.log(p1);
    return p1 + p2;
}

const square1 = p => {
    console.log(p);
    return p * p;
}

const square2 = p => p * p;

function product(a, b) {
    return a * b;
}

const average = function(a, b) {
    return (a + b) / 2;
}

function fn_test() {
    let result = sum(1, 5);
    console.log(result);

    const t = [1, 2, 3];
    const tSquared = t.map(p => p * p);
    console.log(tSquared);

    result = product(2, 6);
    console.log(result);

    result = average(2, 5);
    console.log(result);
}

// variables();
// arrays();
// object();
fn_test();

