const calIp = require('./index');

test('calculate ip address "172.168.5.1" to equal 2896692481', () => {
    expect(calIp('172.168.5.1')).toBe(2896692481);
});

test('calculate ip address "172.168.5.0"  to equal 2896692480', () => {
    expect(calIp('172.168.5.0')).toBe(2896692480);
});

test('calculate ip address "172  .168. 5.1"  to equal 2896692481', () => {
    expect(calIp('172  .168. 5.1')).toBe(2896692481);
});

test('calculate ip address "0.0.0.0"  to equal 0', () => {
    expect(calIp('0.0.0.0')).toBe(0);
});

test('calculate ip address "17 2.16  8.5.1"  to equal false', () => {
    expect(calIp('17 2.168.5.1')).toBe(false);
});

test('calculate ip address "111.222.222.300"  to equal false', () => {
    expect(calIp('111.222.222.300')).toBe(false);
});

test('calculate ip address "111.222.222"  to equal false', () => {
    expect(calIp('111.222.222')).toBe(false);
});

