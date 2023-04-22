//zadanie 1
const text = 'Hello world';
console.log(text);
//zadanie 2
const sprawdzenie = true;
if (sprawdzenie === true) {
  console.log('Prawda');
} else {
  console.log('Fałsz');
}
//zadanie 3
function reverse(input: string): string {
  return input.split('').reverse().join('');
}
const inputString = 'tekst';
const reversed = reverse(inputString);
console.log(reversed);
//nie wiem jak zrobić żeby użytkownik mógł wpisywać tekst
//zadanie 4
const tab: number[] = [1, 2, 3, 4, 5];
console.log(tab);
//zadanie 5
interface User {
  name: string;
  age: string;
}
const human: User = {
  name: 'Michal',
  age: '21',
};
console.log(human);
//zadnie 6
const typescript: any = 'typescript';
console.log(typeof typescript);
//zadanie 7
function square(number: number): number {
  return number = number * number;
}
const num = 5;
const result = square(5);
console.log(result);
//zadanie 8
class Car {
  model: string;

  constructor(model: string) {
    this.model = model;
  }
}
const car_ = new Car('Audi A6');
console.log(car_);
//zadanie 9
function sumTab(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
const tab_ = [1, 2, 3, 4, 5];
console.log(sumTab(tab_));
//zadanie 10
interface Animal {
  name: string;
  sound: string;
  color?: string;
}
const ani: Animal = {
  name: 'Reksio',
  sound: 'hauhau',
  color: 'White',
};
console.log(ani);
