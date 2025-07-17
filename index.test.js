const { add, subtract } = require('./index')

test('Menambahkan 1 + 2 sama dengan 3',()=>{
    expect(add(1,2)).toBe(3)
});

test('Mengurangi 5 - 3 sama dengan 2',()=>{
    expect(subtract(5,3)).toBe(2)
});

test('Mengurangi 10 - 7 sama dengan 3',()=>{
    expect(subtract(10,7)).toBe(3)
});