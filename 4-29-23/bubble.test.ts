import sort from './bubble';
const cases = [
    [3, 9, 20, 3939, 9, 9, 449, 30, 4, 49, 32],
    [2, 1, 3, 4, 5, 7, 6, 9, 8],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [888, 392, 4672, 902, 1234]
];

for (const testCase of cases) {
    let correct = true;
    const sorted = sort(testCase);
    let last = testCase[0];
    for (const number of sorted) {
        correct = correct && number >= last;
        last = number
    }
    correct ? console.log('success') : console.error('falure', { sorted, testCase })
}
