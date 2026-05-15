import Team from "../../index";

describe("проверка функциональности генератора в классе Team", () => {
  test("генератор должен корректно выдовать персонажей", () => {
    const char1 = {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };

    const char2 = {
      name: "Мечник",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 20,
      defence: 40,
    };

    const team = new Team(char1, char2);

    const iterator = team[Symbol.iterator]();

    let step1 = iterator.next();
    expect(step1.value).toEqual(char1);

    let step2 = iterator.next();
    expect(step2.value).toEqual(char2);
  });
});
