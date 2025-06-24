export class ErrorNotImplemented extends Error {
  constructor(message?: string) {
    super(message ?? 'Не реализовано');
  }
}
