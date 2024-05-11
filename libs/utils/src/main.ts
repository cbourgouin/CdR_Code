export default function isEmpty(data: unknown): string {
  if (data === null || data === undefined) {
    return 'It is Empty';
  }
  return 'It is not Empty';
}
