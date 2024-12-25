import { ReverseStringPipe } from '../pipe/reverse-string.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe).toBeTruthy();
  });
});
