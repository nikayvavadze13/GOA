function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 1 completed');
            resolve();
        }, 2000);
    });
}

function task2() {
    console.log('Task 2 completed');
}

task1().then(task2);
