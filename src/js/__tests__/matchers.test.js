import displayHeroesByHealth from '../matchers';
import { describe, test, expect } from '@jest/globals';

describe('checkDisplayHeroes', () => {
    test('Проверка отсортированного массива героев', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = displayHeroesByHealth(heroes);

    const expectedSortedHeroes = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    expect(sortedHeroes).toEqual(expectedSortedHeroes);
    });

    test('Проверка неизменности исходного массива героев', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    displayHeroesByHealth(heroes);

    const expectedHeroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    expect(heroes).toEqual(expectedHeroes);
    });

});