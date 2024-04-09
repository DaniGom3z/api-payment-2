export class Payment {
  constructor(
    public readonly id: number,
    public readonly cantidad: number,
    public readonly estado: string,
    public readonly user: string,
  ) { }
}

