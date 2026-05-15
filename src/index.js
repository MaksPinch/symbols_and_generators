export default class Team {
  constructor(...people) {
    this.charaters = people;
  }
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    for(let character of this.charaters) {
        yield character;
    }
  }
}
