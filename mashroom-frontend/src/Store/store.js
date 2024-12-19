import { action, makeObservable, observable } from "mobx"

class Store {
    totalEarnedCoins = 0;
    currentEnergy = 0;
    maxEnergy = 0;
    user = {};

    constructor() {
        makeObservable(this, {
            totalEarnedCoins: observable,
            currentEnergy: observable,
            maxEnergy: observable,
            user: observable,
            setTotalEarnedCoins: action,
            decreaseCurrentEnergy: action,
            increaseCurrentEnergy: action,
            setUser: action,
        })
    }


    setTotalEarnedCoins = () => {
        this.totalEarnedCoins += 1
    };
    decreaseCurrentEnergy = () => {
        this.currentEnergy -= 1
    }
    increaseCurrentEnergy = () => {
        this.currentEnergy += 1
    }
    setUser = (user) => {
        this.user = user;
        this.totalEarnedCoins = user.coins;
        this.currentEnergy = user.energy;
        this.maxEnergy = user.energy;
    }

}

export const store = new Store();