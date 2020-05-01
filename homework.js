/**
 * Создаем два промиса
 */
let getPromise1 = new Promise((resolve, reject) => {
    resolve('First Promise')
});

let getPromise2 = new Promise((resolve, reject) => {
    resolve('Second Promise')
});

/**
 * Функция all принимает два промиса
 * Возвращает результирующий массив result, при успешном выполнении промисов
 */
const all = (promise1, promise2) => {
    let counter = 0,
        result = [];
    return new Promise((resolve) => {
        const countUp = (data) => {
            counter++;
            result.push(data);
            if (counter == 2) {
                resolve(result);
            }
        }
        promise1.then((firstPromiseData) => {
            countUp(firstPromiseData)
        });
        promise2.then((secondPromiseData) => {
            countUp(secondPromiseData)
        });
    });
}

all(getPromise1, getPromise2).then((result) => console.log(result))