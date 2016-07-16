interface ITestArray {
    id: number,
    name: string
}

export class SomeLoops {

    static testArray: ITestArray[] = [
        {
            id: 1,
            name: "Adam"
        },
        {
            id: 2,
            name: "Bertil"
        },
        {
            id: 3,
            name: "Ceasar"
        }
    ];

    static forOfCounter: number = 0;

    static runThreeDifferentLoops() {
        for (var index = 0; index < this.testArray.length; index++) {
            console.log("for loop: " + this.testArray[index].name);

            if (index === 1) {
                break;  // We can break in good old for loops
            }
        }

        this.testArray.forEach((val, index) => {
            console.log("forEach " + val.name);

            // We can not break or continue inside forEach loops
        });

        for (let val of this.testArray) {
            console.log("for of " + val.name);

            // We can break and continue in this loop, but cant get to index without an external counter

            if (this.forOfCounter === 1) {
                break;
            }

            this.forOfCounter++;
        }
    }

}