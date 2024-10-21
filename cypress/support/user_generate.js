/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

export function generateUser() {
    const lastName = faker.person.lastName();
    const randomNumber = Math.floor(Math.random() * 1000);
    const username = `${lastName}${randomNumber}`;
    const password = 'User1234'; // Ви можете змінити пароль за потреби
    return { username, password };
}
